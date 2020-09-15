import React, { useState, useEffect, useRef } from 'react'

function Edit() {
    const [count, setCount] = useState(0)
    const inputRef = useRef('')
    const timerRef = useRef(null)
    const dataRef = useRef(false)

    useEffect(() => {
        timerRef.current = setInterval(() => {
            inputRef.current.value = 'world'
        }, 1000)

        return () => {
            clearInterval(timerRef)
        }
    }, [])

    const handleClick = () => {
        if (dataRef.current === true) {
            return
        }
        console.log('正在获取数据，请稍等')
        dataRef.current = true
        setTimeout(() => {
            dataRef.current = false
        }, 3000)
    }

    return (
        <>
            <input type="text" value={count} ref={inputRef}/>
            <p onClick={handleClick}>获取网络请求数据</p>
        </>
    )
}

export default Edit