import React, { useState } from 'react';

export function Login() {

  return (
    <main>
      <div className="login-container text-center">

        <form className="login-form" action="/login" method="POST">
          <input type="text" name="username" placeholder="Username" required/>
            <input type="submit" className="btn btn-primary" name="loginButton" value="Log in"/>
              <input type="submit" className="btn btn-primary" name="newUserButton" value="Create New User"/>
              </form>

            </div>
          </main>
          );
}
