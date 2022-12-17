import { useState } from "react";

export const useCounter = (initialCounter=0) => {
    
    const [counter, setCounter] = useState(initialCounter);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    const reset = () => {
        setCounter(initialcounter)
    }


    return {
        counter,
        increment,
        decrement,
        reset
    };

};
