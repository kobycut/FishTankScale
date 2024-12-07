import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import { Alerts } from './alerts/alerts';
import { Login } from './login/login';
import { Tank } from './tank/tank';
import { AuthState } from './login/authState';

import { Event, GameNotifier } from './gameNotifier';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    const [fish, setFish] = useState([]);
    const [tankSize, setTankSize] = useState(null);
    const [filter, setFilter] = useState(null);

    function setFishList(newFishList) {
        setFish(newFishList)
    }
    function setNewTankSize(newTankSize) {
        setTankSize(newTankSize)
    }
    function setNewFilter(newFilter) {
        setFilter(newFilter)
    }
    useEffect(() => {
        if (authState === AuthState.Authenticated) {
            // This will redirect to /tank when the component is loaded and user is authenticated
            <Navigate to="/tank" />;
        }
    }, [authState]);


    function Users() {
        const [events, setEvent] = React.useState([]);

        React.useEffect(() => {
            GameNotifier.addHandler(handleGameEvent);

            return () => {
                GameNotifier.removeHandler(handleGameEvent);
            };
        });

        function handleGameEvent(event) {
            setEvent([...events, event]);
        }

        function createMessageArray() {
            const messageArray = [];
            
            for (const [i, event] of events.entries()) {
                let message = 'unknown';
                if (event.type === Event.Create) {
                    message = ' is building their first tank!'
                }
                if (event.type === Event.Login) {
                    message = ` started building their fish tank`;
                } else if (event.type === Event.Logout) {
                    message = ` finished their tank`;
                } else if (event.type === Event.System) {
                    continue;
                }

                messageArray.push(
                    <div key={i} className='event'>
                        <span className={'player-event'}>{event.from.split('@')[0]}</span>
                        {message}
                    </div>
                );
            }
            while (messageArray.length > 5) {
                messageArray.shift();
            }
            return messageArray;
        }

        return (
            <div className='players'>
                <b>User:{' '}</b>
                <span className='player-name'>{userName}</span>
                <div id='player-messages'>{createMessageArray()}</div>
            </div>
        );
    }










    function logout() {
        GameNotifier.broadcastEvent(userName, Event.Logout);

        localStorage.removeItem('userName');
        setAuthState(AuthState.Unauthenticated);
    }

    return (
        <BrowserRouter>
            <div className='body bg-light text-dark'>
                <header>
                    <NavLink to="/tank">
                        <div id="picture" className="d-flex justify-content-center">
                            <img width="250px" src="/FishTankScale.png"
                            /></div>
                    </NavLink>


                    <main className='container-fluid bg-secondary text-center'>
                        {authState === AuthState.Unauthenticated && (
                            <Button className="button-container">
                                <NavLink to="/login" className="btn btn-primary" >Login</NavLink>
                            </Button>)}
                        {authState === AuthState.Authenticated && (
                            <div className="button-container">
                                <Button className="btn btn-secondary" onClick={() => logout()}>Logout</Button>
                            </div>)}
                        {authState === AuthState.Authenticated && (
                            <div className="notification-container">
                                <Users />
                            </div>
                        )}


                    </main>

                </header>
                <p className="text-center custom-paragraph">
                    Welcome to FishTankScale! Input specifications to test out different tank environments and fish varieties.
                </p>
                <hr />
                <Routes>
                    <Route path='/' element={[<Tank />, <Alerts />]} exact />
                    {/* <Route path='/login' element={<Login />} /> */}

                    <Route path='/tank' element={<>

                        <Tank setFish={setFishList} setTankSize={setNewTankSize} setFilter={setNewFilter} authState={authState} tankSize={tankSize} fishTank={fish} />

                        <Alerts fish={fish} tankSize={tankSize} filter={filter} />
                    </>
                    }
                    />

                    <Route path='/login' element={<Login userName={userName}
                        authState={authState} onAuthChange={(userName, authState) => {
                            setAuthState(authState);
                            setUserName(userName);
                        }} />} />


                    <Route path='*' element={<NotFound />} />
                </Routes>






                <div className="container my-4">
                    <h3 className="text-center mb-4">Helpful Articles</h3>
                    <div className="list-group">
                        <a href="https://www.pharmaquatics.com/post/10-stocking-ideas-for-5-10-and-20-gallon-fish-tanks"
                            className="list-group-item list-group-item-action" target="_blank">Stocking Ideas</a>
                        <a href="https://www.freshwatersystems.com/blogs/blog/how-to-cycle-a-fish-tank?srsltid=AfmBOooX6GqRD6-WK5Pd_VpLudLNNjSe99fVrRrcFFiQLmbzNCaTU0iW"
                            className="list-group-item list-group-item-action" target="_blank">Cycling a Fish Tank</a>
                        <a href="https://www.thesprucepets.com/before-buying-aquarium-1380710"
                            className="list-group-item list-group-item-action" target="_blank">What to Know Before Owning a Fish
                            Tank</a>
                    </div>
                </div>





                <footer className="text-dark py-4">
                    <div className="container text-center">
                        <p className="mb-1">Author: Koby Cutler</p>
                        <div>
                            <a href="https://github.com/kobycut/startup" className="text-dark text-decoration-none"
                                target="_blank">GitHub</a>
                        </div>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}