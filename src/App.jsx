import React from 'react';

import Sdata from "./Sdata";
import Card from "./Card";
import Header from "./Header";


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
const App = () => (

  <>
  <Header/>

{/* <card imgsrc = " " title =" " sname = " " link=" " /> */}
  
  
{/* {Sdata.map(ncard)}
 */}
 
 {/* //ternary operator */}
{/* {favseries === "netflix" ? <Netflix/> : <Amazon/>} */}


 {Sdata.map((val,index) =>{
  return (
    <Card
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.links}
  />
  );
})}


{/*{Sdata.map(function ncard(val){
  return (
    <Card 
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.links}
  />

  );

})}  */}
  

  {/* using arrow fat function */}

  {/*{Sdata.map((val,index) =>{
  return (
    <Card
    key={val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.links}
  />

  );

})}  */}
 
  
  
  {/* <Card 
    imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    link={Sdata[1].links}
  />
  
  <Card 
    imgsrc={Sdata[2].imgsrc}
    title={Sdata[2].title}
    sname={Sdata[2].sname}
    link={Sdata[2].links}
  />
  
  <Card 
    imgsrc={Sdata[3].imgsrc}
    title={Sdata[3].title}
    sname={Sdata[3].sname}
    link={Sdata[3].links}
  />
  
  <Card 
    imgsrc={Sdata[4].imgsrc}
    title={Sdata[4].title}
    sname={Sdata[4].sname}
    link={Sdata[4].links}
  />
  

  
  <Card 
    imgsrc={Sdata[5].imgsrc}
    title={Sdata[5].title}
    sname={Sdata[5].sname}
    link={Sdata[5].links}
  />
   */}
  
  
  
  
  
  
  
  </>
   
);

export default App;

