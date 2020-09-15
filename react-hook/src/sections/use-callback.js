import React, { useState, useEffect, memo, useCallback } from 'react'

function Counter(props) {
    return (
        <>
            <p>count: {props.count}</p>
        </>
    )
}

function Child({ onChange }) {
    const [value, setValue] = useState(0)

    const handleChange = (e) => {
        const { value } = e.target
        setValue(value)
        onChange && onChange(value)
    }

    return (
        <div>
            <input value={value} onChange={handleChange} />
        </div>
    )
}
Child = memo(Child)

function Parent() {
    let [count1, setCount1] = useState(0)
    let [count2, setCount2] = useState(0)
    let [result, setResult] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setCount1(preCount => preCount + 1)
            setCount2(preCount => preCount + 1)
        }, 1000)
    }, [])

    const handleChange = useCallback(() => {
        setResult(count => count + 1)
    }, [])

    return (
        <>
            <Counter count={count1} />
            <Counter count={count2} />
            <Child onChange={handleChange}/>
            <p>result: {result}</p>
        </>
    )
}

export default Parent