import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fish } from 'C:/Users/kobyc/OneDrive/Desktop/CS260/startup/fish.js'


export function Alerts() {
  
  const [fish, setFish] = useState([]);
  const [tankSize, setTankSize] = useState();
  const [filter, setFilter] = useState();

  tankSize = parseInt(tankSize);

  function addFish(species, water_temp, compatible_with, size, min_tank_size) {
      const newFish = new Fish(species, water_temp, compatible_with, size, min_tank_size)
      setFish((previousFish) => [...previousFish, newFish] )
  }

  useEffect(() => {
    const newAlerts = [];
    const totalFish = fish.reduce((acc, fish) => acc + fish.size);
    const maxCapacity = tankSize * 4;
    


    if (totalFish > maxCapacity){
      newAlerts.push("too many fish in tank");
      
      //send the alert here
    }
  }, [fish, tankFish, filter]);





  // const [alerts, setAlerts] = useState([]);
  // if (typeof tankSize === 'string') {
  //   tankSize = parseInt(tankSize);
  // }
  // if (typeof gph === 'string') {
  //   gph = parseInt(gph);
  // }



  // const showAlertList = () => {
  //   return tankFish.map((alert, index) => (
  //     <li key={index} className="list-group-item d-flex justify-content-between">{alert}
  //     </li>
  //   ));
  // };
  function test() {
    console.log('HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
    console.log(tankFish, tankSize, gph);
  }

  function testCheckAll() {
    if (gph > 10 && tankSize > 10 && tankFish.length > 2) {
      return "all conditions met"
    }
    else {
      return "not all conditions met"
    }
  }


  function checkTankSize() {

    return "Tank can hold all these fish."

  };

  function checkFilterGPH() {
    const gph_min_req = tankSize * 4;
    if (gph_min_req >= gph) {
      return "Filter is not strong enough for this tank size."

    } else {
      return "Filter can accomodate this tank size well."
    }
  }

  function checkWaterTemp() {
    return "Water temperature is in the safe range."

  }
  function checkFishCompatibility() {
    return "Fish compatibility is good."
    // if 
  }

  useEffect(() => {
    test();
    const newAlerts = [];
    // tankFish.length > 0 && 
    if (tankSize > 1) {
      const tankSizeAlert = checkTankSize();
      newAlerts.push(tankSizeAlert);
    }
    if (gph > 1 && tankSize > 1) {
      const filterAlert = checkFilterGPH();
      newAlerts.push(filterAlert);
    }


    // if (tankFish.length > 0) {
      const fishCompatibilityAlert = checkFishCompatibility();
      newAlerts.push(fishCompatibilityAlert);
    // }
    // if (tankFish.length > 0) {
      const tempAlert = checkWaterTemp();
      newAlerts.push(tempAlert);
    // }


    setAlerts(newAlerts);
  }, [tankFish, tankSize, gph]);

  


  return (
    <main className='container-fluid d-flex justify-content-center'>

      <div className="alert-container col-md-8" id="alert-container">
        <span className="tooltip-wrapper" style={{ display: 'inline-block' }}>
          <i className="bi bi-info-circle w-auto" data-bs-toggle="tooltip" data-bs-placement="top"
            title="Alerts about your tank will pop up here once you enter in a tank and fish"></i>
        </span>
        <h2>Alerts</h2>
        <ul className="list-group" id="alert-list">

          {/* Map over the alerts array and display each one */}
          {alerts.map((alert, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between">
              {alert}
            </li>
          ))}
          {/* {checkFilterGPH} */}
          {/* {showAlertList()} */}

          {/* <div className="alert alert-danger" role="alert">
            UH-OH! A shark is too big for this tank!
          </div>
          <div className="alert alert-warning" role="alert">
            Careful! African Dwarf Frog's might eat Rasboras.
          </div>
          <div className="alert alert-success" role="alert">
            Woohoo! Tank looks great!
          </div> */}
        </ul>

        <hr />
      </div>

    </main >
  );
}