import React, { useState, useEffect, Fragment } from "react";
import { DestinationsService } from "../services/DestinationsService";
import TravelResultItem from "../components/travel-result-item/TravelResultItem";

const TravelResultList = ({ date, origin, destination }) => {
  const [flightResults, setFlightResults] = useState([]);
  useEffect(() => {
    setFlightResults(
      DestinationsService.flightResults(origin, destination, date)
    );
    return () => setFlightResults(null);
  }, [date, origin, destination]);
  return (
    <div className="container mt-2">
      {flightResults.length === 0 ? null : (
        <div className="row mb-2" style={{ height: "2rem" }}>
          <div className="col">
            <Fragment>
              <a
                className="carousel-control-prev bg-dark rounded"
                href="#flightResults"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next bg-dark rounded"
                href="#flightResults"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </Fragment>
          </div>
        </div>
      )}
      <div id="flightResults" className="carousel slide" data-ride="carousel" data-interval="false">
        <div className="carousel-inner">
          {flightResults.length ? null : (
            <div className="carousel-item active">
              wybierz trasę, aby zobaczyć dostępne loty
            </div>
          )}
          {flightResults.map((result, resultIx) => {
            return (
              <div
                className={`carousel-item ${resultIx === 0 ? "active" : ""}`}
                key={resultIx}
              >
                <div className="row">
                  <div className="col">
                    <h3>{result.date}</h3>
                  </div>
                </div>
                <div className="row">
                  {result.flights.map((flight, flightIx) => (
                    <div key={flightIx} className="col-lg-12 col-md-6 mb-2">
                      <TravelResultItem
                        flight={flight}
                        from={result.origin}
                        to={result.destination}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(TravelResultList);
