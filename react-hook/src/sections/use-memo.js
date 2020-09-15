import React, { useState, useMemo } from 'react'

const fib = count => {
    if (count <= 1) {
      return count;
    } else if (count === 2) {
      return 2;
    } else {
      return fib(count - 1) + fib(count - 2);
    }
  };
  const computeExpensiveValue = count => {
    const v = fib(count);
    return v;
  };

function Parent() {
    const [count, setCount] = useState(40)
    const [count2, setCount2] = useState(10)
    const result = useMemo(() => computeExpensiveValue(count), [count])

    return (
        <>
            <p>result: { result }</p>
            <div>
                <input type="number" disabled value={count}/>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
                <input type="number" disabled value={count2}/>
                <button onClick={() => setCount2(count2 + 1)}>+</button>
                <button onClick={() => setCount2(count2 - 1)}>-</button>
            </div>
        </>
    )
}

export default Parent