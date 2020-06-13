import React, { useMemo } from "react";
import moment from "moment";

/**
 * @typedef TravelResult
 * @property {id} string
 * @property {string} from
 * @property {string} to
 * @property {Date} start
 * @property {Date} end
 */
/**
 *
 * @param {{result: TravelResult}} props
 */
const TravelResultItem = ({ flight, from, to }) => {
  const start = useMemo(() => moment(flight.start).format("HH:mm"), [flight]);
  const end = useMemo(() => moment(flight.end).format("HH:mm"), [flight]);
  return (
    <div className="card">
      <div className="card-body">
        {from} - {to}
      </div>
      <div className="card-footer">
        {start} - {end}
      </div>
    </div>
  );
};

export default React.memo(TravelResultItem);
