import React, { useState } from 'react';
import { AuthState } from './authState';
import { Authenticated } from './authenticated';
import { Unauthenticated } from './unauthenticated';




export function Login({ userName, authState, onAuthChange, }) {

  const [fact, setFact] = useState("");

  React.useEffect(() => {

    fetch(`https://uselessfacts.jsph.pl/api/v2/facts/today`)
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setFact(data.text);
      })
      .catch();
  }, []);


  return (
    <main>
      <div>
        {authState !== AuthState.Unknown}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
        <div className="d-flex flex-column justify-content-center align-items-center">

          <h2>Random Fact of the Day</h2>
          <p>{fact}</p>
        </div>
      </div>
    </main>
  );
}
