import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App() {
   const[ count, setCount]= useState(0);

   function decreaseHandler(){
    setCount(count-1);

   }
   function increaseHandler(){
    setCount(count+1);

   }
   function resetHandler(){
    setCount(0);

   }
  return (
  <div className='w-[100%] h-[100%] bg-blue-900 flex justify-center items-center flex-col gap-10'>
    <div className=' text-blue-500 font-medium text-2xl'>
      Increment and Decrement
    </div>
    <div className=' bg-white  flex justify-center gap-12 rounded-sm text-[25px]'>
    <div >
    <button onClick={decreaseHandler } className=' border-r-2  px-4'> -</button>

    </div>
    <div className=' font-bold'>
      {count}

    </div>

    <div><button onClick={increaseHandler} className=' border-l-2  px-4' > +</button> </div>
    </div>
    
    
    < div> < button onClick={resetHandler}> Reset</button></div>

  </div>
  );
}

export default App;
