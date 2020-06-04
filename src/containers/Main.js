import React, { useMemo } from "react";
import TravelDatePicker from "../components/travel-date-picker/TravelDatePicker";
import DestinationPicker from "../components/destination-picker/DestinationPicker";

const Main = () => {
  const today = useMemo(() => new Date(), []);
  return (
    <div className="container-fluid">
      <div className="row">
        <DestinationPicker />
      </div>
      <div className="row">
        <div className="col-md-6">
          <TravelDatePicker
            todayDate={today}
            onDateSelect={(date) => console.log(date)}
          />
        </div>
        <div className="col-md-6">
          <TravelDatePicker
            todayDate={today}
            onDateSelect={(date) => console.log(date)}
          />
        </div>
      </div>
    </div>
  );
};
export default Main;
