import React from 'react';
import './App.css';
import {ProductTable} from './ProductTable.js' ;
const products =[{'name':"TV",'category':"Electronics",'price':1300},
                 {'name':"dress",'category':"Clothes",'price':100},
                 {'name':"LepTop",'category':"Electronics",'price':2600}] ;
function App() {
  return (
    <div className="App">
      < ProductTable products ={products}/>
    </div>
  );
}

export default App;
