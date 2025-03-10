import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userModal from '../Modals/userModal.js';

const app = express();
app.use(cookieParser());
app.use(express.json());
dotenv.config();
const { sign } = jwt;

// Function to check if the user exists
const checkUser = async (username) => {
  const userVal = await userModal.findOne({ Username: username });
  if (userVal === null) return null; // Return null if no user found
  return userVal; // Return the user object if found
};

// Function to generate JWT token
const tokenGeneration = async (username) => {
  const secret = 'HIII_this_meee';
  const token = await sign({ data: username }, secret, { expiresIn: '2hr', algorithm: 'HS256' });
  return token;
};

// Function to encrypt password
const encryptData = async (reqData) => {
  const { Password } = reqData;
  const encrypted = await bcrypt.hash(Password, 10);
  reqData.Password = encrypted; // Set the encrypted password
  return reqData;
};

// Login function
export const LoginDetail = async (req, res) => {
  const { Username, Password } = req.body;
  try {
    const userVal = await checkUser(Username); // Get the user from the database
    if (userVal === null) throw new Error("Username or Password doesn't match"); // User doesn't exist
    const passCheck = await bcrypt.compare(Password, userVal.Password); // Compare passwords
    if (!passCheck) throw new Error("Username or Password doesn't match"); // Password doesn't match

    const generateToken = await tokenGeneration(Username); // Generate token
    res.cookie('jwt_token', generateToken, { expiresIn: '2hr', httpOnly: true }); // Set the cookie

    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      token: generateToken
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};

// Signup function
export const signupDetail = async (req, res) => {
  const details = req.body;
  const { Username } = details;
  try {
    const isExit = await checkUser(Username); // Check if the username exists
    if (isExit) throw new Error('Username already exists'); // Throw error if user exists

    const sendData = await encryptData(details); // Encrypt the password
    const result = await userModal.create(sendData); // Create the user in the database
    const generateToken = await tokenGeneration(Username); // Generate token

    res.cookie('jwt_token', generateToken, { expiresIn: '2hr', httpOnly: true }); // Set the cookie
    res.status(200).json({
      status: 'success',
      message: 'Signup successful',
      token: generateToken
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err.message
    });
  }
};
