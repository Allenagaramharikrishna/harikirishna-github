import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Decrement,
  Increment,
} from "../../redux/counter-action-creators/CounterActionCreators";

const Counter = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state);
  console.log(storeData);
  return (
    <div>
      <h1>Count:{storeData.counterData.count} </h1>
      <button className="btn btn-info" onClick={() => dispatch(Increment(1))}>
        Increment
      </button>
      <button className="btn btn-info" onClick={() => dispatch(Decrement(1))}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
