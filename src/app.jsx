import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Alerts } from './alerts/alerts';
import { FilterSelection } from './filterSelection/filterSelection';
import { FishInTank } from './fishInTank/fishInTank';
import { FishSearch } from './fishSearch/fishSearch';
import { HelpfulArticles } from './helpfulArticles/helpfulArticles';
import { Login } from './login/login';
import { Recommendations } from './recommendations/recommendations';
import { TankSelection } from './tankSelection/tankSelection';


export default function App() {
    return (
        <BrowserRouter>
            <div className='body bg-dark text-light'>
                <header>
                    <div id="picture" class="d-flex justify-content-center"><img width="250px" src="C:\Users\kobyc\OneDrive\Desktop\CS260\startup\public\FishTankScale.png" alt="random"
                        style="margin-top: 20px" /></div>

                </header>

                <main>App components go here</main>

                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/alerts' element={<Alerts />} />
                    <Route path='/filterSelection' element={<FilterSelection />} />
                    <Route path='/fishInTank' element={<FishInTank />} />
                    <Route path='/fishSearch' element={<FishSearch />} />
                    <Route path='/helpfulArticles' element={<HelpfulArticles />} />
                    <Route path='/recommendations' element={<Recommendations />} />
                    <Route path='/tankSelection' element={<TankSelection />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

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