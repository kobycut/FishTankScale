import React from 'react';

export function Tank() {
  return (
    <main classNameName='container-fluid bg-secondary text-center'>
      <div>tank displayed here</div>
      <div className="container">

        <div className="row">
          <div className="col-md-2 d-flex flex-column">
            <span className="tooltip-wrapper" style="display: inline-block;">
              <i className="bi bi-info-circle mt-5 w-auto" data-bs-toggle="tooltip" data-bs-placement="top"
                title="Add the tank size you will be using in gallons"></i>
            </span>
            <select className="form-select-lg mb-3 w-auto" name="Tanks" id="Tanks" aria-label="Default select example"
              onChange="toggleCustomTank()">
              <option value="" disabled selected>Add Tank</option>
              <option value="custom">Input Your Own</option>
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
                <option value="150_gal">150 gal</option>
                <option value="200_gal">200 gal</option>

              </optgroup>


            </select>
            <div className="form-group mb-2" id="customTankInput" style="display:none;">

              <input type="number" className="form-control" id="customTank" name="customTank" min="1"
                placeholder="Enter size in gallons" />
            </div>


            <span className="tooltip-wrapper" style="display: inline-block;">
              <i className="bi bi-info-circle" data-bs-toggle="tooltip" data-bs-placement="left"
                data-bs-title="Enter the GPH (Gallons Per Hour) rating of your filter or filters combined. This is the amount of water the filter can process in an hour."></i>
            </span>
            <select className="form-select-lg mb-3 w-auto " name="FilterGPH" id="FilterGPH"
              aria-label="Default select example" onChange="toggleCustomGPH()">
              <option value="" disabled selected>Select GPH</option>
              <option value="custom">Input Your Own</option>
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
            <div className="form-group mb-2" id="customGPHInput" style="display:none;">

              <input className="form-control" type="number" id="customGPH" name="customGPH" min="1"
                placeholder="Enter GPH" />
            </div>

          </div>

          <div className="outer-container col-md-9 d-flex align-items-start ">

            <div className="fish_tank-container text-center w-100">

              <h3 className="mb-3">
                Your Fish Tank
              </h3>
              <div className="dropdown">
                <input type="text" id="search-select" className="form-control mt-2 w-auto" name="searchforfish"
                  style="background-color: azure;" placeholder="Search for a fish"
                  onkeyup="filterSelectOptions()" />

                <select className="form-control w-auto mt-1" id="item-select" style="background-color: azure;">


                  <option value="" disabled selected>Choose a fish to add</option>
                  <optgroup label="Bettas">
                    <option value="Betta_Female">Female Betta</option>
                    <option value="Betta_Male">Male Betta</option>
                  </optgroup>

                  <optgroup label="Gouramis">
                    <option value="Dwarf_Gourami">Dwarf Gourami</option>

                  </optgroup>


                  <optgroup label="Guppys">
                    <option value="Fancy_Guppy">Fancy Guppy</option>

                  </optgroup>

                  <optgroup label="Rasboras">
                    <option value="Harlequin_Rasbora">Harlequin Rasbora</option>

                  </optgroup>
                  <optgroup label="Shrimp">
                    <option value="Cherry_Shrimp">Cherry Shrimp</option>
                    <option value="Amano_Shrimp">Amano Shrimp</option>

                  </optgroup>
                  <optgroup label="Crabs">
                    <option value="Fiddler_Crab">Fiddler Crab</option>

                  </optgroup>


                  <optgroup label="Snails">

                    <option value="Nerite_Snail">Nerite Snail</option>

                  </optgroup>

                  <optgroup label="Tetras">
                    <option value="Neon_Tetra">Neon Tetra</option>
                    <option value="Cardinal_Tetra">Cardinal Tetra</option>

                  </optgroup>
                  <optgroup label="Misc. Fish">
                    <option value="African_Dwarf_Frog">African Dwarf Frog</option>
                  </optgroup>

                </select>
              </div>

              <button className="btn btn-success ms-2" id="add-fish-button">+</button>
              <button className="btn btn-danger ms-2" id="decrement-fish-button">-</button>
              <div className="container align-items-start" id="container">

                <ul className="list-group align-items-start mt-3" id="item-list">
                  <li className="list-group-item">African Dwarf Frog</li>
                  <li className="list-group-item">Mickey_Mouse_Platy</li>
                  <li className="list-group-item">Rasbora_Espei</li>
                  <li className="list-group-item">Shark</li>


                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}