import React, { useState, useEffect } from "react";
import { DestinationsService } from "../services/DestinationsService";
import TravelResultItem from "../components/travel-result-item/TravelResultItem";

const TravelResultList = () => {
  const [flightResults, setFlightResults] = useState([]);
  useEffect(() => {
    setFlightResults(DestinationsService.flightResults);
  }, []);
  return (
    <div className="container mt-2 bg-light">
      <div
        id="travelSlide"
        className="carousel slide"
        data-ride="carousel"
        data-interval="false"
      >
        <a href="#travelSlide" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#travelSlide"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="row">
              {flightResults.map((result) => (
                <div className="col-md-12" key={result.id}>
                  <TravelResultItem result={result} />
                </div>
              ))}
            </div>
          </div>
          <div class="carousel-item">
            <div className="row">
              {flightResults.map((result) => (
                <div className="col-md-12" key={result.id}>
                  <TravelResultItem result={result} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelResultList;
