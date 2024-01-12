// src/components/ResetPassword.js
import React, { useState } from 'react';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = () => {
    // Implement your reset password logic here
    console.log('Resetting password with:', newPassword);
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form>
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleResetPassword}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
