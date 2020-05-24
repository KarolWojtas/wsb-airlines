import React, { useMemo } from "react";
import TravelDatePicker from "../components/travel-date-picker/TravelDatePicker";

const Main = () => {
  const today = useMemo(() => new Date(), []);
  return (
    <div className={"container-fluid"}>
      <div className={"row"}>
        <div className={"col-md-6"}>
          <TravelDatePicker
            startDate={today}
            onDateSelect={(date) => console.log(date)}
          />
        </div>
      </div>
    </div>
  );
};
export default Main;
