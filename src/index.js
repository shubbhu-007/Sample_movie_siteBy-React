import React from 'react';
import ReactDom from 'react-dom';

import App from "./App";


// function ncard(val){
//   return (
//     <Card 
//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.links}
//   />

//   );

// }
ReactDom.render(
  <>
    
  <App/>
  </>,
   document.getElementById("root")
);
