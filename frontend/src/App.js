import { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const [count , setcount] = useState(0);


console.log(count);


function Result(){
  setcount(count+1);
}

useEffect(()=> {
  
if(count<5)
{
  setcount(count+1);
}
  

},[count]);


  return (  
    <div>
<h1 className='App'> Hello</h1>
<h2 className='App'>{count}</h2>
    
<button onClick={Result}  >Click To increment The Number </button>    
    
    </div>
  )

}

export default App;
