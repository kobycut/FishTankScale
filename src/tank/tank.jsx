import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthState } from 'C:/Users/kobyc/OneDrive/Desktop/CS260/startup/src/login/authState.js';
import { Alerts } from 'C:/Users/kobyc/OneDrive/Desktop/CS260/startup/src/alerts/alerts.jsx';
import { African_Dwarf_Frog, Amano_Shrimp, Betta_Female, Betta_Male, Cardinal_Tetra, Cherry_Shrimp, Dwarf_Gourami, Fancy_Guppy, Harlequin_Rasbora, Neon_Tetra } from 'C:/Users/kobyc/OneDrive/Desktop/CS260/startup/fish.js'



export function Tank({ setFish, setTankSize, setFilter, authState, tankSize, tank }) {



  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>



  function getStockingAvg(fishTank) {
    let total_size = 0;
    console.log(fishTank);
    for (let i = 0; i < fishTank.length; i++) {
      const fish = fishTank[i];
      total_size += fish.size;
    }
    let stocking_lvl = 0;
    if (fishTank.length > 0 && parseInt(tankSize) > 0) {
      stocking_lvl = (total_size / parseInt(tankSize)) * 100;
    }

    // if stocking lvl > 100 text red, if not text green
    // if tank empty, set to "--"
    const stockingElement = document.getElementById("stocking_level");

    if (fishTank.length === 0) {
      stockingElement.textContent = "0";
      stockingElement.style.color = "black"; // Default color for empty tanks
    } else {
      stockingElement.textContent = Math.round(stocking_lvl) + "%";

      if (stocking_lvl > 100) {
        stockingElement.style.color = "red"; // Overstocked
      } else {
        stockingElement.style.color = "green"; // Good stocking level
      }

    }
  }


  function getWaterPhRange(fishTank) {
    if (fishTank.length == 0) {
      document.getElementById("water_ph").textContent = "--pH"
    }
    if (fishTank.length > 0) {
      let min_ph = 0;
      let max_ph = 10000;
      for (let i = 0; i < fishTank.length; i++) {
        const fish = fishTank[i];
        if (fish.ph_min > min_ph) {
          min_ph = fish.ph_min;
        }
        if (fish.ph_max < max_ph) {
          max_ph = fish.ph_max;
        }
      }
      document.getElementById("water_ph").textContent = min_ph + " - " + max_ph + " pH";
    }


  }
  function getWaterTempRange(fishTank) {
    if (fishTank.length == 0) {
      document.getElementById("water_temp").textContent = "--°F"
    }
    if (fishTank.length > 0) {
      let min_temp = 0;
      let max_temp = 10000;
      for (let i = 0; i < fishTank.length; i++) {
        const fish = fishTank[i];
        if (fish.water_temp_min > min_temp) {
          min_temp = fish.water_temp_min;
        }
        if (fish.water_temp_max < max_temp) {
          max_temp = fish.water_temp_max;
        }
      }

      document.getElementById("water_temp").textContent = min_temp + " - " + max_temp + " °F";
    }
  }

  function getWaterGhRange(fishTank) {
    if (fishTank.length == 0) {
      document.getElementById("water_hardness").textContent = "--°gH"
    }
    if (fishTank.length > 0) {
      let min_gH = 0;
      let max_gH = 10000;
      for (let i = 0; i < fishTank.length; i++) {
        const fish = fishTank[i];
        if (fish.water_hardness_min > min_gH) {
          min_gH = fish.water_hardness_min;
        }
        if (fish.water_hardness_max < max_gH) {
          max_gH = fish.water_hardness_max;
        }
      }

      document.getElementById("water_hardness").textContent = min_gH + " - " + max_gH + " °gH";
    }
  }

  function toggleCustomTank() {
    var select = document.getElementById("Tanks");
    var customTankInput = document.getElementById("customTankInput");

    // if (select.value == "custom") {
    //   customTankInput.style.display = "block";
    // } else {
    //   customTankInput.style.display = "none";
    // }
  }

  function toggleCustomGPH() {
    var select2 = document.getElementById("FilterGPH");
    var customGPHInput = document.getElementById("customGPHInput");
    // if (select2.value == "custom") {
    //   customGPHInput.style.display = "block";
    // } else {
    //   customGPHInput.style.display = "none";
    // }
  }
  function changeTankSize(newTankSize) {
    setTankSize(newTankSize);
  }
  function changeFilter(newFilter) {
    setFilter(newFilter);
  }

  function addFish(species) {
    let newFish = " ";
    switch (species) {
      case 'Dwarf Gourami':
        newFish = new Dwarf_Gourami();
        break;
      case 'Betta Female':
        newFish = new Betta_Female();
        break;
      case 'Betta Male':
        newFish = new Betta_Male();
        break;
      case 'Cherry Shrimp':
        newFish = new Cherry_Shrimp();
        break;
      case 'Neon Tetra':
        newFish = new Neon_Tetra();
        break;
      case 'Cardinal Tetra':
        newFish = new Cardinal_Tetra();
        break;
      case 'African Dwarf Frog':
        newFish = new African_Dwarf_Frog();
        break;
      case 'Fancy Guppy':
        newFish = new Fancy_Guppy();
        break;
      case 'Harlequin Rasbora':
        newFish = new Harlequin_Rasbora();
        break;
      case 'Amano Shrimp':
        newFish = new Amano_Shrimp();
        break;

    }

    setFish((previousFish) => {

      const updatedFish = [...previousFish, newFish]
      getStockingAvg(updatedFish);
      getWaterPhRange(updatedFish);
      getWaterTempRange(updatedFish);
      getWaterGhRange(updatedFish);
      return updatedFish
    });
  }
  function removeFish(species) {
    setFish((previousFish) => {
      const index = previousFish.findIndex((fish) => fish.species === species);
      if (index === -1) return previousFish;

      const updatedFish = [...previousFish.slice(0, index), ...previousFish.slice(index + 1)];
      getStockingAvg(updatedFish);
      getWaterPhRange(updatedFish);
      getWaterTempRange(updatedFish);
      getWaterGhRange(updatedFish);

      return updatedFish;
    });
  }


  const [selectedFish, setSelectedFish] = useState('');
  const [tankFish, setTankFish] = useState([]);
  // const [tankSize, setTankSize] = useState(['']);
  const [gph, setGph] = useState(['']);

  const addFishToTank = () => {
    if (selectedFish) {

      addFish(selectedFish);

      const existingFish = tankFish.find(fish => fish.name === selectedFish);
      Alerts
      if (existingFish) {
        setTankFish(tankFish.map(fish =>
          fish.name === selectedFish ? { ...fish, count: fish.count + 1 } : fish));
      } else {
        setTankFish([...tankFish, { name: selectedFish, count: 1 }]);
      }

    }
  };

  const incrementFishCount = (fishName) => {
    addFish(fishName, 10, null, 20, 30);
    setTankFish(tankFish.map(fish =>
      fish.name === fishName ? { ...fish, count: fish.count + 1 } : fish
    ));
  };

  const decrementFishCount = (fishName) => {
    removeFish(fishName, 10, null, 20, 30);
    setTankFish(tankFish.map(fish =>
      fish.name === fishName ? fish.count > 1 ? { ...fish, count: fish.count - 1 }
        : null : fish).filter(fish => fish !== null)
    );
  };

  const showTankFish = () => {
    return tankFish.map((fish, index) => (
      <li key={index} className="list-group-item d-flex justify-content-between">{fish.name}: {fish.count}
        <div>
          <button className="btn btn-success btn-sm ms-2" onClick={() => incrementFishCount(fish.name)}>+</button>
          <button className="btn btn-danger btn-sm ms-2" onClick={() => decrementFishCount(fish.name)}>-</button>

        </div>
      </li>
    ));
  };

  return (
    <main className='container-fluid text-center'>
      <div className="container">
        <div className="row">
          <div className="col-md-2 d-flex flex-column">
            <span className="tooltip-wrapper" style={{ display: 'inline-block' }}>
              <i className="bi bi-info-circle mt-5 w-auto" data-bs-toggle="tooltip" data-bs-placement="top"
                title="Add the tank size you will be using in gallons"></i>
            </span>
            <select defaultValue="" className="form-select-lg mb-3 w-auto" name="Tanks" id="Tanks" aria-label="Default select example"
              onChange={(e) => changeTankSize(e.target.value)}>
              <option value="" disabled>Add Tank</option>
              {/* <option value="custom">Input Your Own</option> */}
              <optgroup label="Small Tanks">
                <option value="3_gal">3 gal</option>
                <option value="5_gal">5 gal</option>
                <option value="10_gal">10 gal</option>
                <option value="15_gal">15 gal</option>
              </optgroup>
              <optgroup label="Medium Tanks">
                <option value="20_gal">20 gal</option>
                <option value="25_gal">25 gal</option>
                <option value="30_gal">30 gal</option>
                <option value="40_gal">40 gal</option>
                <option value="50_gal">50 gal</option>
              </optgroup>
              <optgroup label="Large Tanks">
                <option value="55_gal">55 gal</option>
                <option value="65_gal">65 gal</option>
                <option value="75_gal">75 gal</option>
                <option value="100_gal">90 gal</option>
                {/* <option value="150_gal">150 gal</option>
                <option value="200_gal">200 gal</option> */}
              </optgroup>

            </select>
            <div className="form-group mb-2" id="customTankInput" style={{ display: 'none' }}>

              <input type="number" className="form-control" id="customTank" name="customTank" min="1"
                placeholder="Enter size in gallons" />
            </div>


            <span className="tooltip-wrapper" style={{ display: 'inline-block' }}>
              <i className="bi bi-info-circle" data-bs-toggle="tooltip" data-bs-placement="left"
                data-bs-title="Enter the GPH (Gallons Per Hour) rating of your filter or filters combined. This is the amount of water the filter can process in an hour."></i>
            </span>
            <select defaultValue="" className="form-select-lg mb-3 w-auto " name="FilterGPH" id="FilterGPH"
              aria-label="Default select example" onChange={(e) => changeFilter(e.target.value)}>
              {/* toggleCustomGPH */}
              <option value="" disabled>Select Filter GPH</option>
              {/* <option value="custom">Input Your Own</option> */}
              <option value="20_GPH">20 GPH</option>
              <option value="30_GPH">30 GPH</option>
              <option value="40_GPH">40 GPH</option>
              <option value="50_GPH">50 GPH</option>
              <option value="60_GPH">60 GPH</option>
              <option value="70_GPH">70 GPH</option>
              <option value="80_GPH">80 GPH</option>
              <option value="90_GPH">90 GPH</option>
              <option value="100_GPH">100 GPH</option>
              <option value="120_GPH">120 GPH</option>
              <option value="140_GPH">140 GPH</option>
              <option value="160_GPH">160 GPH</option>
              <option value="180_GPH">180 GPH</option>
              <option value="200_GPH">200 GPH</option>
              <option value="230_GPH">240 GPH</option>
              <option value="260_GPH">270 GPH</option>
              <option value="300_GPH">300 GPH</option>
              <option value="350_GPH">350 GPH</option>
              <option value="400_GPH">400 GPH</option>


            </select>
            <div className="form-group mb-2" id="customGPHInput" style={{ display: 'none' }}>

              <input className="form-control" type="number" id="customGPH" name="customGPH" min="1"
                placeholder="Enter GPH" />
            </div>
          </div>

          <div className="outer-container col-md-9 d-flex align-items-start ">
            <div className="fish_tank-container text-center w-100">
              <h3 className="mb-3 d-flex flex-grow justify-content-between align-items-center w-100 text-center">
                <div className="flex-grow-1 text-center">Your Fish Tank</div>


              </h3>

              <div className="dropdown">

                <select value={selectedFish} onChange={(e) => setSelectedFish(e.target.value)} className="form-control w-auto mt-1" id="item-select" style={{ backgroundColor: 'azure' }}>
                  <option value="" disabled>Choose a fish to add</option>
                  <optgroup label="Bettas">
                    <option value="Betta Female">Female Betta</option>
                    <option value="Betta Male">Male Betta</option>
                  </optgroup>
                  <optgroup label="Gouramis">
                    <option value="Dwarf Gourami">Dwarf Gourami</option>
                  </optgroup>
                  /* <optgroup label="Guppys">
                    <option value="Fancy Guppy">Fancy Guppy</option>
                  </optgroup> */
                  /* <optgroup label="Rasboras">
                    <option value="Harlequin Rasbora">Harlequin Rasbora</option>
                  </optgroup> */
                  <optgroup label="Shrimp">
                    <option value="Cherry Shrimp">Cherry Shrimp</option>
                    /* <option value="Amano Shrimp">Amano Shrimp</option> */
                  </optgroup>
                  {/* <optgroup label="Crabs">
                  <option value="Fiddler_Crab">Fiddler Crab</option>
                </optgroup> */}
                  {/* <optgroup label="Snails">
                  <option value="Nerite_Snail">Nerite Snail</option>
                </optgroup> */}
                    /* <optgroup label="Tetras">
                    <option value="Neon Tetra">Neon Tetra</option>
                    <option value="Cardinal Tetra">Cardinal Tetra</option>
                  </optgroup> */
                  /* <optgroup label="Misc. Fish">
                    <option value="African Dwarf Frog">African Dwarf Frog</option>
                  </optgroup> */
                </select>
                <button className="btn btn-success ms-2" onClick={addFishToTank}>Add Fish</button>
              </div>

              {/* <button className="btn btn-success ms-2" id="add-fish-button" onClick={addFishToTank}>+</button> */}
              {/* <button className="btn btn-danger ms-2" id="decrement-fish-button">-</button> */}
              <div className="container align-items-start" id="container">

                <ul className="list-group align-items-start mt-3" id="item-list">
                  {showTankFish()}
                  {/* <li className="list-group-item">African Dwarf Frog</li>
                  <li className="list-group-item">Mickey_Mouse_Platy</li>
                  <li className="list-group-item">Rasbora_Espei</li>
                  <li className="list-group-item">Shark</li> */}
                </ul>

              </div>
            </div>
            <div className="outer-container col-md-2 flex-column d-flex justify-content-center">
              <span className="tooltip-wrapper" style={{ display: 'inline-block' }}>
                <i className="bi bi-info-circle  w-auto ms-4" data-bs-toggle="tooltip" data-bs-placement="left"
                  title="These are the recommended levels for your tank."></i>
              </span>
              <div id="recommendations" className="recommendations-container">


                <div className="text-end">


                  <p>Stocking Level: <span id="stocking_level">--%</span></p>
                  <p>Hardness: <span id="water_hardness">--°gH</span></p>
                  <p>Temp:‎ ‎ ‎
                    ‎   <span id="water_temp">--°F</span></p>
                  <p>pH: ‎ ‎
                    ‎‎ <span id="water_ph">--pH</span></p>
                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}