import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    aa: 111,
    bb: 222,
  });

  const sveHandler = () => {
    setCount((count) => (count) => +1);
    setObj({ ...obj, bb: "nesto drugo" });
  };
  return (
    <>
      <h2>{count}</h2>
      <div>
        {obj.aa},a bb ={obj.bb}
      </div>
      <button onClick={sveHandler}>Add</button>
    </>
  );
};
export default Counter;
