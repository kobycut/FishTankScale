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
        return "DANGER, These fish do not fit in this tank";
      }
      else {
        return null;

      }
    }
  }

  function checkTankSizeToFilter(tankSize, filter) {
    if (tankSize * 4 > filter) {
      return "DANGER, filter is not strong enough for this tank size, recommended filter for this tank size: " + tankSize * 4 + " GPH  or greater";
    }
    else {
      return null;
    }
  }
  function checkWaterTemp(fishList) {
    let total_water_temp = 0;
    for (let i = 0; i < fishList.length; i++) {
      total_water_temp += fish.water_temp_min;
      total_water_temp += fish.water_temp_max;
    }
    let temp_lvl = total_water_temp / (fishList.length * 2);
    for (let i = 0; i < fishList.length; i++) {
      const fish = fishList[i];

      if (fish.water_temp_min > temp_lvl) {
        return `DANGER, Tank temperature needs to be higher than ${(fish.water_temp_min)} for ${fish.species}`;
      }
      if (fish.water_temp_max < temp_lvl) {
        return `DANGER, Tank temperature needs to be lower than ${fish.water_temp_max} for ${fish.species}`;
      }

    }
    return null;


  }
  function checkCompatibility(fishList) {
    let incompatibilities = [];
    let processedFish = new Set();

    const uniqueFishList = fishList.filter((fish, index, self) => {
      return index === self.findIndex(f => f.species === fish.species);
    });

    for (let i = 0; i < uniqueFishList.length; i++) {
      const currentFish = uniqueFishList[i];

      if (processedFish.has(currentFish.species)) {
        continue;
      }
      processedFish.add(currentFish.species);
      for (let j = 0; j < currentFish.incompatible_with.length; j++) {
        const incompatibleFishName = currentFish.incompatible_with[j];
        const incompatibleFish = uniqueFishList.find(f => f.species === incompatibleFishName);
        if (incompatibleFish && currentFish.species !== incompatibleFish.species) {
          incompatibilities.push({
            fish1: currentFish.species,
            fish2: incompatibleFishName
          });
        }

      }
    }
    if (incompatibilities.length == 0) {
      return null;
    }
    return incompatibilities.map(pair => `DANGER, ${pair.fish1} is incompatible with ${pair.fish2}.`).join("\n");
  }
  function checkSpecialMessage(fishList) {
    const specialMessageList = []
    for (let i = 0; i < fishList.length; i++) {
      if (fishList[i].special_message != null) {
        specialMessageList.push(fishList[i].special_message);
      }
    }
    if (specialMessageList.length == 0) {
      return null;
    }
    return specialMessageList;
  }

  // checkSchooling(fishList) {
  //   for (let i = 0; i < fishList.length; i++) {

  //   }
  // }

  function checkWaterTemp(fishList) {
    let min_temp = 0;
    let max_temp = 10000;
    for (let i = 0; i < fishList.length; i++) {
      const fish = fishList[i];
      if (fish.water_temp_min > min_temp) {
        min_temp = fish.water_temp_min;
      }
      if (fish.water_temp_max < max_temp) {
        max_temp = fish.water_temp_max;
      }
    }
    for (let i = 0; i < fishList.length; i++) {
      const fish = fishList[i];
      if (fish.water_temp_min > max_temp) {
        return `DANGER, water temperature not suitable for ${fish.species}`;
      }
      if (fish.water_temp_max < min_temp) {
        return `DANGER, water temperature not suitable for ${fish.species}`;
      }

    }
    return null;

  }


  function checkWaterPh(fishList) {
    let min_ph = 0;
    let max_ph = 10000;
    for (let i = 0; i < fishList.length; i++) {
      const fish = fishList[i];
      if (fish.ph_min > min_ph) {
        min_ph = fish.ph_min;
      }
      if (fish.ph_max < max_ph) {
        max_ph = fish.ph_max;
      }
    }
    for (let i = 0; i < fishList.length; i++) {
      const fish = fishList[i];
      if (fish.ph_min > max_ph) {
        return `DANGER, pH levels not suitable for ${fish.species}`;
      }
      if (fish.ph_max < min_ph) {
        return `DANGER, pH levels not suitable for ${fish.species}`;
      }

    }
    return null;

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

    if (fishList != null) {
      if (fishList.length > 0 && tankSizeInt > 0) {
        const alert = checkFishSizeToTank(fishList, tankSizeInt);

        if (alert != null) {
          newAlerts.push(alert);
        }
      }
      if (fishList.length > 0) {

        const alert = checkWaterPh(fishList);
        if (alert != null) {
          newAlerts.push(alert);
        }
        const tempAlert = checkWaterTemp(fishList);
        if (tempAlert != null) {
          newAlerts.push(tempAlert);
        }


        const alert3 = checkCompatibility(fishList);
        if (alert3 != null) {
          newAlerts.push(alert3);
        }

        const alert2 = checkWaterTemp(fishList);
        if (alert2 != null) {
          newAlerts.push(alert2);
        }

        const alert4 = checkSpecialMessage(fishList);
        if (alert4 != null) {
          for (let i = 0; i < alert4.length; i++) {
            newAlerts.push(alert4[i]);
          }
        }
      }
    }










    if (newAlerts.length < 1) {
      newAlerts.push("SUCCESS, Tank looks good!");

    }

    const uniqueAlerts = [...new Set(newAlerts)];
    setAlerts(uniqueAlerts);


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

              style={alert === "SUCCESS, Tank looks good!" ? { color: 'green' } : alert.startsWith("CAUTION") ? { color: '#2B3BFF' } : { color: '#D2042D' }}

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