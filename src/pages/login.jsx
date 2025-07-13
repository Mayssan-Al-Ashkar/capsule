import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import googleIcon from '../assets/google.jpg'; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              placeholder="Enter your username" 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
            />
          </div>
          
          <button type="submit" className="login-btn">Login</button>
        </form>
        
        <div className="divider">
          <span>or</span>
        </div>
        
        <button className="google-btn">
          <img src={googleIcon} alt="Google" className="google-icon" />
          Continue with Google
        </button>
        
        <div className="login-footer">
          <Link to="/forgot-password" className="forgot-password">
            Forgot password?
          </Link>
          <p>
            Don't have an account?{' '}
            <Link to="/register" className="register-link">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;