import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render (
// //   <>
//   <h1>Favourite Band Members</h1>
//   <p>My favourite Band members are listed below</p>
//   <ol>
//   <li>Cold Play</li>
//   <li>John Mayer</li>
//   <li>Sajjan Raj Vaidya</li>
//   <li>Shreya</li>
//   </ol>
//   </>,
//   document.getElementById('root')
// )

let css = {
  color: 'red',
  fontSize: '50px',
  textTransform: 'lowercase',
  letterSpacing : '6px'
}
let cssSpan = {
  color:'green'
}

ReactDOM.render(
  <>
  {/* With internal css */}
  <h1 style={css}>Hello, <span style ={cssSpan}>Shreya</span></h1> 

  {/* with inline css */}
  <h2 style= {{color: 'blue'}}>How are you?</h2>
  </>,
  document.getElementById('root')
  )
