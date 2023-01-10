
import './App.css';
import React from 'react';
import store from "./redux/store";
// import Counter from './Components/SimpleReact/Counter';
import CounterRedux from './Components/CounterRedux';
import {Provider} from "react-redux";
import BatRedux from './Components/BatRedux';
import Login from "./firebasecomponents/login";
function App() {
  return (
    <Provider store={store}>
       
         <h1>Redux Examples</h1>
         {/* <Counter></Counter> */}
         {/* <CounterRedux></CounterRedux> */}
         {/* <BatRedux></BatRedux> */}
         <login></login>
    </Provider>    
  );
}
export default App;
