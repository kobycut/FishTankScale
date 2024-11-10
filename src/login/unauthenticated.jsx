import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';
import { NavLink } from 'react-router-dom';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ height: '50vh' }}>
        <div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>@</span>
            <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
          </div>
          <div className='input-group mb-3'>
            <span className='input-group-text'>🔒</span>
            <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
          </div>
          <div className="d-flex justify-content-center">
            <NavLink to="/tank">
              <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
                Login
              </Button>
            </NavLink>
            <NavLink to="/tank">
              <Button variant='secondary' className="ms-2" onClick={() => createUser()} disabled={!userName || !password}>
                Create
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
