import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fish } from 'C:/Users/kobyc/OneDrive/Desktop/CS260/startup/fish.js'


export function Alerts(fish, tankSize, filter) {

  const [alerts, setAlerts] = useState([]);





  // all check functions that useEffect gets alerts from

  function checkFishSizeToTank(fishList, tankSize) {
    let totalFishInches = 0;
    if (fishList.length > 0) {
      totalFishInches = fishList.reduce((acc, fish) => acc + (fish.size || 0), 0);
    }

    if (fishList.length > 0) {
      if (totalFishInches > tankSize) {
        return "These fish do not fit in this tank";
      }
      else {
        return null;

      }
    }
  }

  function checkTankSizeToFilter(tankSize, filter) {
    if (tankSize * 4 > filter) {
      return "filter is not strong enough for this tank size";
    }
    else {
      return null;
    }
  }


  useEffect(() => {
    const tankSizeInt = parseInt(fish.tankSize) || 0;
    const filterInt = parseInt(fish.filter) || 0;
    const fishList = fish.fish;
    const newAlerts = [];

    console.log(fishList);

    // this is where the check functions are called
    if (tankSizeInt > 0 && filterInt > 0) {
      const alert = checkTankSizeToFilter(tankSizeInt, filterInt);

      if (alert != null) {
        newAlerts.push(alert);

      }
    }


    if (fishList.length > 0 && tankSizeInt > 0) {
      const alert = checkFishSizeToTank(fishList, tankSizeInt);

      if (alert != null) {
        newAlerts.push(alert);
      }
    }










    if (newAlerts.length < 1) {
      newAlerts.push("Tank looks good!");

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
            <li key={index} className="list-group-item d-flex justify-content-between"
              style={alert === "Tank looks good!" ? { color: 'green' } : { color: 'red' }}

            >
              {alert}
            </li>
          ))}

        </ul>

        <hr />
      </div>

    </main >
  );
}