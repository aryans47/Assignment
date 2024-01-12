// src/components/ForgotPassword.js
import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Implement your forgot password logic here
    console.log('Sending password reset email to:', email);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleForgotPassword}>
          Send Reset Email
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
