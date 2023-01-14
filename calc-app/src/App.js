import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [result,setResult]=useState('');

  const clickhandler=(event)=>{
    setResult(result.concat(event.target.value))
  }

  const erase=(event)=>{
    setResult('');
  }

  const calc=()=>{
    setResult(eval(result));
  }
  return (
    <div className="App">
      <input type="text" placeholder="0" id="answer" value={result}/>
      <div className='Number'>
      <input type="button" value="AC" className='button gr' onClick={erase}/>
      <input type="button" value="." className='button gr' onClick={clickhandler}/>
      <input type="button" value="%" className='button gr' onClick={clickhandler}/>
      <input type="button" value="/" className='button yello' onClick={clickhandler}/>
      <input type="button" value="9" className='button' onClick={clickhandler}/>
      <input type="button" value="8" className='button' onClick={clickhandler}/>
      <input type="button" value="7" className='button' onClick={clickhandler}/>
      <input type="button" value="*" className='button yello' onClick={clickhandler}/>
      <input type="button" value="6" className='button' onClick={clickhandler}/>
      <input type="button" value="5" className='button' onClick={clickhandler}/>
      <input type="button" value="4" className='button' onClick={clickhandler}/>
      <input type="button" value="-" className='button yello' onClick={clickhandler}/>
      <input type="button" value="3" className='button' onClick={clickhandler}/>
      <input type="button" value="2" className='button' onClick={clickhandler}/>
      <input type="button" value="1" className='button' onClick={clickhandler}/>
      <input type="button" value="+" className='button yello' onClick={clickhandler}/>

      <input type="button" value="0" className='button button1' onClick={clickhandler}/>
      <input type="button" value="=" className='button yello' onClick={calc}/>
      </div>

    </div>
  );
}

export default App;
