import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Test.css'

function App() {
  const [counter, setCounter] = useState(0);
 
    const handleClick1 = () => {
        setCounter(counter + 1);
    };
    const handleClick2 = () => {
      if (counter <= 0) {
        alert("please press the increase button to increase the counter value");
      }
      else{
        setCounter(counter - 1);
      }
  };
 const  resetHandler = () =>{
  setCounter(0);
 }
 
  const btn = { color: '#007acc',marginRight:10 , cursor:'pointer',padding:6,};
  return (
    <>
  
 <div className="container">
  <div className="containerChild1" style={{color:'red'}}>{counter}</div>
  <div className="containerChild">
    <button style={btn} onClick={resetHandler}>Reset</button>
    <button style={btn}  onClick={handleClick2}>Decrement</button>
    <button style={btn}  onClick={handleClick1}>Increment</button>
    </div>
    </div>
    
    </>
    
  )
  // setCouter(counter > 0 ? counter - 1 : 0)
  if (setCounter < 0) {
    alert("Please enter the value is greater than 0")
  }
  else{
    counter -1
  }
}

export default App
