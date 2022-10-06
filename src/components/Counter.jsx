import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(5);
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h1>{count}</h1>
        </div>
    );
};

export default Counter;