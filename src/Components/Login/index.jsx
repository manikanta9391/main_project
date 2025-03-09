import React from 'react';
import './index.css'
const Login = () => {
     
    return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form  className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Sign up now to unlock exclusive access and take your first step toward success!
            </p>
            <button className="btn transparent" id="sign-up-btn" >
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
       
      </div>
    </div>
  );
}

export default Login;
