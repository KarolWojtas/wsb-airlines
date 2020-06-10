import React, { useMemo } from "react";
import TravelDatePicker from "../components/travel-date-picker/TravelDatePicker";
import DestinationPicker from "../components/destination-picker/DestinationPicker";
import TravelResultList from "./TravelResultList";

const Main = () => {
  const today = useMemo(() => new Date(), []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-md-6">
          <DestinationPicker />
        </div>
        <div className="col-lg-4 col-md-6 d-flex justify-content-center">
          <TravelDatePicker
            todayDate={today}
            onDateSelect={(date) => console.log(date)}
          />
        </div>
        <div className="col-lg-8 col-md-12">
          <TravelResultList />
        </div>
      </div>
    </div>
  );
};
export default Main;
