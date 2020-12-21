import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount, resetCount } from "../actions";

const Counter = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increaseCount)}>Increase</button>
      <button onClick={() => dispatch(decreaseCount)}>Decrease</button>
      <button onClick={() => dispatch(resetCount)}>Reset</button>
    </div>
  );
};
export default Counter;
