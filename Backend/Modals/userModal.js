import mongoose from "mongoose";
const userSchem = {
  Username: {
    type: String,
    trim: true,
    required:true,
    unique:true
  },
  Name: {
    type: String,
    trim: true,
    required: true
  },
  Password: {
    type: String,
    trim: true,
    required: true,
    minlength:8
  },
  RePassword: {
    type: String,
    trim: true,
    required: true
  },
  Gmail: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  }
};

const userSchema = new mongoose.Schema(userSchem);
const userModal = mongoose.model("userLogins", userSchema);

export default userModal;
