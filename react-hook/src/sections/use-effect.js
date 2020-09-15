import React, { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <>
            <p>count: {count}</p>
        </>
    )
}

export default Counter