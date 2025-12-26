import React, {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
      <div className="counterLayout">
        <h2 className={count >= 0 ? "positive" : "negative"}>{count}</h2>
        <div className="buttonContainer">
          <button onClick={increment} className="increment">
            <span>Increment</span>
          </button>
          <button onClick={decrement} className="decrement">
            <span>Decrement</span>
          </button>
          <button onClick={reset} className="reset">
            <span>Reset</span>
          </button>
        </div>
      </div>
    );
}

export default Counter