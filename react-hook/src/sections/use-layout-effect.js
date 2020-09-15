import React, { useState, useEffect, useLayoutEffect } from 'react'

function Input() {
    const [value, setValue] = useState('')
    const [lengths, setLengths] = useState(0)

    useEffect(() => {
        if (value.length > 10) {
            setValue(value.substring(0, 10))
        }
        setLengths(value.length)
    }, [value])

    const handleChange = (e) => {
        const { value } = e.target
        setValue(value)
    }

    return(
        <>
            <input value={value} type="text" placeholder="最大长度为10" onChange={handleChange} />
            <p>length: {lengths}</p>
        </>
    )
}

export default Input