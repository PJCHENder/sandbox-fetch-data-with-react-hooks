/**
 * https://www.robinwieruch.de/react-hooks-fetch-data
 */

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App ">
      <h1>Fetch data with React Hooks</h1>
      <div className="pure-form">
        <div className="pure-control-group">
          <input type="text" className="pure-input-rounded" />
          <button type="button" className="pure-button button-small">
            Search
          </button>
        </div>
      </div>
      <div className="pure-menu">
        <ul className="pure-menu-list">
          <li className="pure-menu-item">Hello React</li>
          <li className="pure-menu-item">Hello React Hooks</li>
          <li className="pure-menu-item">Hello Sandbox</li>
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
