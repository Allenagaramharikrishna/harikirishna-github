import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function ShowTemp({ texts }) {
  return (
    <div class="container my-5">
      <div class="row mb-2">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Description</h5>
              <p class="card-text">{texts.description}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Temp</h5>
              <p class="card-text">{texts.temp}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Temp Min</h5>
              <p class="card-text">{texts.temp_min}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Temp Max</h5>
              <p class="card-text">{texts.temp_max}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Humidity</h5>
              <p class="card-text">{texts.humidity}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Sunrise</h5>
              <p class="card-text">{texts.sunrise}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Sunset</h5>
              <p class="card-text">{texts.sunset}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Country</h5>
              <p class="card-text">{texts.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowTemp;
