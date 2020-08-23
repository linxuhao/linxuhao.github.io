import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/DashBoard/DashBoard.js";
import "./App.css";

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
