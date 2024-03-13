import { useCounter } from "../hooks";
import { Small } from "./Small";
import { useState } from "react";
export const Memorize = () => {
  const { counter, increment } = useCounter(5);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
