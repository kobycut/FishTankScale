import React, { useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Alerts() {
  
  return (
    <main className='container-fluid d-flex justify-content-center'>

      <div className="alert-container col-md-8" id="alert-container">
        <span className="tooltip-wrapper" style={{ display: 'inline-block' }}>
          <i className="bi bi-info-circle w-auto" data-bs-toggle="tooltip" data-bs-placement="top"
            title="Alerts about your tank will pop up here once you enter in a tank and fish"></i>
        </span>
        <h2>Alerts</h2>
        <ul className="list-group" id="alert-list">
          <div className="alert alert-danger" role="alert">
            UH-OH! A shark is too big for this tank!
          </div>
          <div className="alert alert-warning" role="alert">
            Careful! African Dwarf Frog's might eat Rasboras.
          </div>
          <div className="alert alert-success" role="alert">
            Woohoo! Tank looks great!
          </div>
        </ul>

        <hr />
      </div>

    </main >
  );
}