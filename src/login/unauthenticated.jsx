import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';
import { NavLink, redirect, useNavigate } from 'react-router-dom';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);
  const navigate = useNavigate();

  async function loginUser() {
    loginOrCreate('/api/auth/login');
  }

  async function createUser() {
    loginOrCreate('/api/auth/create');
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      navigate('/tank');
      localStorage.setItem('userName', userName);
      props.onLogin(userName);

    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
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

            <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
              Login
            </Button>

            {/* <NavLink to='/tank'> */}
            <Button variant='secondary' className="ms-2" onClick={() => createUser()} disabled={!userName || !password}>
              Create
            </Button>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
