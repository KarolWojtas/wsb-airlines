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
const TravelResultItem = ({ result }) => {
  const start = useMemo(() => moment(result.start, "x").format(), [result]);
  const end = useMemo(() => moment(result.end, "x").format(), [result]);
  return (
    <div className="card">
      <div className="card-body">
        {result.from} - {result.to}
      </div>
      <div className="card-footer">
        {start} - {end}
      </div>
    </div>
  );
};

export default React.memo(TravelResultItem);
