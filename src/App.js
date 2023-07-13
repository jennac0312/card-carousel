import './App.css';
// components
import Button from './components/Button'
import Card from './components/Card'
// models
import cardImages from './models/cardImages';
import symbols from './models/symbols';
// hooks
import { useState } from 'react';



function App() {
  // 1. desctructure state
  // const [var, setVariableFunction] = useState(initial value)
  const [count, setCount] = useState(0) 
  const [currentPic, setCurrentPic] = useState(cardImages[0])


  // function to change state (right arrow button)
  const changeCount = () => {
    console.log(count)

    // setVariableFunction(new value to update var to)
    setCount(count + 1)


  }

  // function for left arrow
  const reverseCount = () => {
    console.log(count)

    // setVariableFunction(new value to update var to)
    setCount(count - 1)
  }


  return (
    <div className="App">
      
      <Card currentCount={count} images={cardImages}/>
      <Button symbol={symbols.left} changePic={reverseCount}/>
      <Button symbol={symbols.right} changePic={changeCount}/>

    </div>
  );
}

export default App;
