import React from "react";
import { useSelector } from "react-redux";

const History = () => {
  const history = useSelector((state: any) => state.counter.history);
  return (
    <div>
      <p>
        {history
          ? history.map((item: any, idx: number) => {
              return <li key={idx}>{item}</li>;
            })
          : null}
      </p>
    </div>
  );
};
export default History;
