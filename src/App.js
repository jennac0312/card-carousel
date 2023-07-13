import './App.css';
// components
import Button from './components/Button'
import Card from './components/Card'
// models
import cardImages from './models/cardImages';
import symbols from './models/symbols';
// hooks
import { useState } from 'react';

console.log(cardImages)


function App() {
  // 1. desctructure state
  // const [var, setVariableFunction] = useState(initial value)
  const [count, setCount] = useState(0) 
  const [currentPic, setCurrentPic] = useState(cardImages[0])


  // function to change state (right arrow button)
  const changeCount = () => {
    // loop back to first pic
    if(count >= (cardImages.length-1) ){
      setCount(0)
    } else{
      // setVariableFunction(new value to update var to)
      setCount(count + 1)
    }
    console.log('right count is now at', count+1)


  }

  // function for left arrow
  const reverseCount = () => {
    // console.log(typeof count)
    
    if(count === 0 ){
      // loop back to last pic
      // setCount(3)
      setCount(cardImages.length-1)
    } else{
      setCount(count - 1)
      // setVariableFunction(new value to update var to)
    }
    console.log('left count is now at', count)
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
