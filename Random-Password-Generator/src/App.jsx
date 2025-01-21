import { useState } from 'react'


function App() {


  return (
   <div className='container'>
        <h2>Password Generator</h2>
        <div className='display'>
        <input type="text" readOnly />
        <button>Copy</button>
        </div>
        
        <div className='passwordLength'>
          <label>Password Length</label>
          <input type="number" max={20} min={10}/>
        </div>
        <div className='check'>
          <label>UpperCase</label>
          <input type="checkbox" />
        </div>

        <div className='check'>
          <label>LowerCase</label>
          <input type="checkbox" />
        </div>

        <div className='check'>
          <label>Number</label>
          <input type="checkbox" />
        </div>
        <div className='check'>
          <label>Special Characters</label>
          <input type="checkbox" />
        </div>
        <button className='btn'>Press To Generate</button>
   </div>
  )
}

export default App
