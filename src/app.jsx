import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className='body bg-dark text-light'>
            <header>
                <div id="picture" class="d-flex justify-content-center"><img width="250px" src="C:\Users\kobyc\OneDrive\Desktop\CS260\startup\public\FishTankScale.png" alt="random"
                    style="margin-top: 20px" /></div>

            </header>

            <main>App components go here</main>

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
    );
}