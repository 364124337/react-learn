import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(4);
  console.log("改变值了：", count);
  return (
    <>
      <p>
        count: {count}, random: {Math.random()}
      </p>
      <button onClick={() => setCount(count < 5 ? count + 1 : count)}>
        点击这里加1
      </button>
      <button onClick={() => setCount(count - 1)}>点击这里减1</button>
    </>
  );
}

export default Counter;
