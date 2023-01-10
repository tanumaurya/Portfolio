import React, { useState, useEffect } from 'react'
function UseState() {
    let [count, setCount] = useState(0);
    const IncrementCount = () => {
        setCount(count + 1);
    }
    const DecrementCount = () => {
        setCount(count - 1);
    }
    useEffect(function () {
        setInterval(
            function () {
                // it is not a good way to set new state 
                setCount(function (prevCount) {
                    return prevCount + 1;
                })
            }, 1000);
    }, [])


    return (
        <>
            <button
                onClick={IncrementCount}>Increment</button>
            <span>    {count}    </span>
            <button
                onClick={DecrementCount}>Decrement</button>
        </>
    )
}
export default UseState;