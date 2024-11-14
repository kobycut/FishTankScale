import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fish } from 'C:/Users/kobyc/OneDrive/Desktop/CS260/startup/fish.js'


export function Alerts() {

  const [fish, setFish] = useState([]);
  const [tankSize, setTankSize] = useState();
  const [filter, setFilter] = useState();
  const [alerts, setAlerts] = useState([]);

  const tankSizeInt = parseInt(tankSize);
  const filterInt = parseInt(filter);

  
  function addFish(species, water_temp, compatible_with, size, min_tank_size) {
    const newFish = new Fish(species, water_temp, compatible_with, size, min_tank_size)
    setFish((previousFish) => [...previousFish, newFish])
  }


  useEffect(() => {
    console.log(fish, tankSizeInt, filterInt)
    const newAlerts = [];
    if (fish.size > 0) {
      const totalFishInches = fish.reduce((acc, fish) => acc + fish.size);
    }
    const maxCapacityFishInches = tankSizeInt;


    if (fish.size > 0) {
      if (totalFishInches > maxCapacity) {
        newAlerts.push("too many fish in tank");

        //send the alert here
      }
    }
    setAlerts(newAlerts);
  }, [fish, tankSize, filter]);

  return (
    <main className='container-fluid d-flex justify-content-center'>

      <div className="alert-container col-md-8" id="alert-container">
        <span className="tooltip-wrapper" style={{ display: 'inline-block' }}>
          <i className="bi bi-info-circle w-auto" data-bs-toggle="tooltip" data-bs-placement="top"
            title="Alerts about your tank will pop up here once you enter in a tank and fish"></i>
        </span>
        <h2>Alerts</h2>
        <ul className="list-group" id="alert-list">
          {alerts.map((alert, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              {alert}
            </li>
          ))}

        </ul>

        <hr />
      </div>

    </main >
  );
}