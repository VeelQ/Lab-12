import React from 'react';
import {useEffect, useState} from "react";

const styles = {
   backgroundColor: '#000',
   color: '#fff',
   float: 'left',
   height: '100vh',
   width: '220px'
};

export function Data() {


   // za pomocą mechanizmu useState w tym miejscu należy ustawić hook’a bazując na przykładzie z zielonej ramki powyżej

   useEffect(() => {
   // wykorzystując przykład z zielonej ramki należy pobrać dane z serwera     
   }, []);

   if (!chartData) {
       return null;
   }

   return (<div className="container-fluid" >
       <div className="row">
           <div className="col-2" style={styles}>
               <h1>Current state:</h1>
               <ul>
                   <li>Temp: {chartData.temp}</li>
                   <li>Humidity: {chartData.humidity}</li>
                   <li>Pressure: {chartData.pressure}</li>
               </ul>
           </div>
       </div>
   </div>);
}


function App() {

   return (
       <div className="App">
          <h1> Aplikacja ReactJS z bootstrap działa </h1>
       </div>
   );
}


