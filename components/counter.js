'use client';
import { useState } from 'react';

export default function Counter({ initialCount = 0, initialStep = 1, showStepInput = false }) {

    const [count, setCount] = useState(initialCount);
    const [step, setStep] = useState(initialStep);

    const increment = () => setCount(c => c + step);
    const decrement = () => setCount(c => (c - step >= 0 ? c - step : c));


    const reset = () => setCount(initialCount);

    return (
        <>
            <div className='counter'>
                {/* Display current count */}
                <div className='count-display' aria-live='polite'>
                    Count: {count}
                </div>

                {/* Buttons to increment, decrement, and reset the count */}
                <div className='buttons'>
                    <button onClick={increment}>+{step}</button>
                    <button onClick={decrement} disabled={count - step < 0}>-{step}</button>
                    <button onClick={reset}>Reset</button>
                </div>

                {/* Optional input to set the step value */}
                {showStepInput && (
                <div>
                <label htmlFor="step">Step: </label>
                <input
                    id="step"
                    type="number"
                    value={step}
                    min="1"
                    onChange={(e) => setStep(Number(e.target.value))}
                />
                </div>
            )}

            </div>
        </>
    )


}