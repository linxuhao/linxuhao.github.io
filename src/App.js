import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "./components/DashBoard/DashBoard.js";
import "./App.css";
import "./bootstrap/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-content">
            <Dashboard />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
