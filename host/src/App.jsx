import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ReactDOM from "react-dom";
import SignUp from "./Components/SignUp";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
  <SignUp/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
