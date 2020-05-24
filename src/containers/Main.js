import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

const Main = () => {
  const counter = useSelector((store) => store.counter);
  const dipatch = useDispatch();
  const increment = useCallback(() => {
    dipatch({ type: "INCREMENT" });
  }, [dipatch]);

  return (
    <div>
      halko
      <button onClick={() => increment()}>{counter}</button>
    </div>
  );
};
export default Main;
