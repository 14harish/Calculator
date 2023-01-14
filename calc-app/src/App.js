import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="0" id="answer"/>
      <div className='Number'>
      <input type="button" value="AC" className='button gr'/>
      <input type="button" value="." className='button gr'/>
      <input type="button" value="%" className='button gr'/>
      <input type="button" value="/" className='button yello'/>
      <input type="button" value="9" className='button '/>
      <input type="button" value="8" className='button'/>
      <input type="button" value="7" className='button'/>
      <input type="button" value="*" className='button yello'/>
      <input type="button" value="6" className='button'/>
      <input type="button" value="5" className='button'/>
      <input type="button" value="4" className='button'/>
      <input type="button" value="-" className='button yello' />
      <input type="button" value="3" className='button'/>
      <input type="button" value="2" className='button'/>
      <input type="button" value="1" className='button'/>
      <input type="button" value="+" className='button yello'/>

      <input type="button" value="0" className='button button1'/>
      <input type="button" value="=" className='button yello'/>
      </div>

    </div>
  );
}

export default App;
