import React, { useState, useRef, useEffect } from 'react'

function Counter() {
    let [count, setCount] = useState(0)
    const ref = useRef()

    useEffect(() => {
        ref.current = count
    }, [])

    return (
        <>
            <h1>
                Now: {count}, before: {ref.current}
            </h1>
            <input type="text" value={count} onChange={e => setCount(e.target.value)}/>
        </>
    )
}

export default Counter