import React, { useState } from "react";
import History from './History'

const App = () => {
  // const [counter, setCounter] = useState(0);
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    }
    const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    }
 
  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {right}
      <History allClicks = {allClicks}/>
  {/* <div>{counter}</div>
  <button onClick={() => setCounter(counter + 1)}>plus</button>
  <button onClick={() => setCounter(0)}>Zero</button> */}
    </div>
  );
};

export default App;
