import React, { useState, useEffect } from "react";
import { DestinationsService } from "../services/DestinationsService";
import TravelResultItem from "../components/travel-result-item/TravelResultItem";

const TravelResultList = ({ date, origin, destination }) => {
  const [flightResults, setFlightResults] = useState([]);
  useEffect(() => {
    setFlightResults(
      DestinationsService.flightResults(origin, destination, date)
    );
  }, [date, origin, destination]);
  return (
    <div className="container mt-2">
      <div
        id="travelSlide"
        className="carousel slide"
        data-ride="carousel"
        data-interval="false"
      >
        <a
          href="#travelSlide"
          role="button"
          data-slide="prev"
          className="carousel-control-prev bg-light"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next bg-light"
          href="#travelSlide"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
        fix carousel
        <div className="carousel-inner">
          <div className="carousel-item active">1</div>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">2</div>
        </div>
        {flightResults.map((result, resultIx) => {
          return (
            <div className="carousel-inner" key={resultIx}>
              <div className={`carousel-item `}>
                <div className="row">
                  <div className="col">
                    <h3>{result.date}</h3>
                  </div>
                </div>
                <div className="row">
                  {result.flights.map((flight, flightIx) => (
                    <div key={flightIx} className="col-lg-12 col-md-6">
                      <TravelResultItem
                        flight={flight}
                        from={result.origin}
                        to={result.destination}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(TravelResultList);
