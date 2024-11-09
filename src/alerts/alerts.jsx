import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Alerts() {
  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>alerts displayed here</div>

      <div className="outer-container col-md-2 flex-column d-flex justify-content-center">
        <span className="tooltip-wrapper" style="display: inline-block;">
          <i className="bi bi-info-circle  w-auto ms-4" data-bs-toggle="tooltip" data-bs-placement="left"
            title="These are the recommended levels for your tank."></i>
        </span>
        <div id="recommendations" className="recommendations-container">


          <div className="text-end">


            <p>Stocking Level: <span id="stocking_level">--%</span></p>
            <p>Filter Capacity: <span id="filter_capacity">--%</span></p>
            <p>Water Temp:‎ ‎ ‎ ‎ <span id="water_temp">--°F</span></p>
            <p>Water pH: ‎ ‎ ‎ ‎ ‎ ‎ <span id="water_ph">--pH</span></p>



          </div>
        </div>
        <button className="d-flex btn btn-success mt-5 ms-1 w-auto">Save Tank</button>

      </div>





      <div className="alert-container col-md-8" id="alert-container">
        <span className="tooltip-wrapper" style="display: inline-block;">
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


      </div>
    </main >
  );
}