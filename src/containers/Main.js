import React, { useMemo, useState } from "react";
import TravelDatePicker from "../components/travel-date-picker/TravelDatePicker";
import DestinationPicker from "../components/destination-picker/DestinationPicker";
import TravelResultList from "./TravelResultList";
import { useSelector } from "react-redux";

const Main = () => {
  const today = useMemo(() => new Date(), []);
  const [selectedDate, setSelectedDate] = useState(today);
  const origin = useSelector((store) => store.originCity);
  const destination = useSelector((store) => store.destinationCity);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-md-6">
          <DestinationPicker />
        </div>
        <div className="col-lg-5 col-md-6 d-flex justify-content-center mt-lg-1 mt-md-3">
          <TravelDatePicker
            todayDate={today}
            onDateSelect={(date) => setSelectedDate(date)}
          />
        </div>
        <div className="col-lg-7 col-md-12 mb-2">
          <TravelResultList
            date={selectedDate}
            origin={origin}
            destination={destination}
          />
        </div>
        <div className="col-12"></div>
      </div>
    </div>
  );
};
export default Main;
