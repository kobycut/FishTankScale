import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Login() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>login displayed here</div>
      <div className="button-container">
        <button type="submit" className="btn btn-primary">Login</button>
      </div>
    </main>
  );
}