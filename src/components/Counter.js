import { useState } from 'react';


function Counter(props) {

  const [count, setCount] = useState(0); // Declares a piece of state and
  //   stateValue, stateSetter            // its initial value
  const [plusClicked, setPlusClicked] = useState(false);
  const [messages, setData] = useState(["hello", "class", "51"]);


  const incrementScore = () => {
    setCount(count + 1)
    setPlusClicked(true)
  }

  const decrementScore = () => {
    setCount(count - 1)
  }

  console.log("re-render?")

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
    <span>{messages[count]}</span>
  </div>
  );
}
 
export default Counter;