import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Alerts } from './alerts/alerts';
import { Login } from './login/login';
import { Tank } from './tank/tank';


export default function App() {
    return (
        <BrowserRouter>
            <div className='body bg-dark text-light'>
                <header>
                    <div id="picture" class="d-flex justify-content-center"><img width="250px" src="C:\Users\kobyc\OneDrive\Desktop\CS260\startup\public\FishTankScale.png" alt="random"
                        style="margin-top: 20px" /></div>

                </header>
                <p class="text-center custom-paragraph">
                    Welcome to FishTankScale! Input specifications to test out different tank environments and fish varieties.
                </p>




                <main>App components go here</main>

                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/alerts' element={<Alerts />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/tank' element={<Tank />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>






                <div class="container my-4">
                    <h3 class="text-center mb-4">Helpful Articles</h3>
                    <div class="list-group">
                        <a href="https://www.pharmaquatics.com/post/10-stocking-ideas-for-5-10-and-20-gallon-fish-tanks"
                            class="list-group-item list-group-item-action" target="_blank">Stocking Ideas</a>
                        <a href="https://www.freshwatersystems.com/blogs/blog/how-to-cycle-a-fish-tank?srsltid=AfmBOooX6GqRD6-WK5Pd_VpLudLNNjSe99fVrRrcFFiQLmbzNCaTU0iW"
                            class="list-group-item list-group-item-action" target="_blank">Cycling a Fish Tank</a>
                        <a href="https://www.thesprucepets.com/before-buying-aquarium-1380710"
                            class="list-group-item list-group-item-action" target="_blank">What to Know Before Owning a Fish
                            Tank</a>
                    </div>
                </div>

                <footer class="text-dark py-4">
                    <div class="container text-center">
                        <p class="mb-1">Author: Koby Cutler</p>
                        <div>
                            <a href="https://github.com/kobycut/startup" class="text-dark text-decoration-none"
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