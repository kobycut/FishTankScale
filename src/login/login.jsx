import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Login() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>login displayed here</div>
      <div class="button-container">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </main>
  );
}