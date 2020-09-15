import React, { useState, useContext, createContext } from 'react'

const parentContext = createContext()
function Parent(props) {
    const countArr = useState({
        count1: 0,
        count2: 1
    })
    return(
        <parentContext.Provider value={countArr}>
            {props.children}
        </parentContext.Provider>
    )
}

function Child(props) {
    const countArr = useContext(parentContext)
    const [countObj, setCountObj] = countArr

    const changeCount1 = () => {
        setCountObj({
            ...countObj,
            count1: countObj.count1 + 1
        })
    }

    const changeCount2 = () => {
        setCountObj({
            ...countObj,
            count2: countObj.count2 + 2
        })
    }

    return (
        <>
            <div>
                count1: {countObj.count1} <button onClick={changeCount1}>+1</button>
            </div>
            <div>
                count1: {countObj.count2} <button onClick={changeCount2}>+2</button>
            </div>
        </>
    )
}

export default () => (
    <Parent>
        <Child />
    </Parent>
)