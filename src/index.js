import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Index from "./page/index"
import Invigilator from "./page/Invigilator"

const AppWithRouter = () => (
  <BrowserRouter>
  {/* {checklogin()} */}
  {/* {this.checklogin()} */}
      <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/Invigilator" component={Invigilator} />
      </Switch>
      {/* <App/> */}
  </BrowserRouter>
)
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
