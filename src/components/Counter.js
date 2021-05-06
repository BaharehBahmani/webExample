import { useState } from 'react';


function Counter(props) {

  const [count, setCount] = useState(0); // Declares a piece of state and
  //   stateValue, stateSetter            // its initial value
  const [plusClicked, setPlusClicked] = useState(false);

  const incrementScore = () => {
    setCount(count + 1)
    setPlusClicked(true)
  }

  const decrementScore = () => {
    setCount(count - 1)
  }


  return (
  <div>
    <p>The count currently is:</p>
    <h1>{count}</h1>
    <div>
      <button
        style={{ marginRight: 20 }}
        onClick={incrementScore}
        disabled={plusClicked}
        >+
      </button>
      <button onClick={decrementScore}>-</button>
    </div>
  </div>
  );
}
 
export default Counter;