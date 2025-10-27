'use client';
import { useState } from 'react';

export default function Counter({ initialCount = 0, initialStep = 1 }) {

    const [count, setCount] = useState(initialCount);
    const [step, setStep] = useState(initialStep);

    const increment = () => setCount(count + step);
    const decrement = () => {
        if (count - step >= 0) setCount(count - step);
    };

    const reset = () => setCount(0);

    return (
        <>
            <div id='buttons'>
                <button onClick={increment}>+{step}</button>
                <button onClick={decrement} disabled={count - step < 0}>-{step}</button>
                <button onClick={reset}>Reset</button>      
            </div>

            <div aria-live='polite'>
                Count: {count}
            </div>
        </>
    )


}