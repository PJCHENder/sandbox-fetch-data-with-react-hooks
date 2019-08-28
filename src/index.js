/**
 * https://www.robinwieruch.de/react-hooks-fetch-data
 */

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App pure-form">
      <h1>Fetch data with React Hooks</h1>
      <div className="pure-control-group">
        <input type="text" className="pure-input-rounded" />
        <button type="button" className="pure-button button-small">
          Search
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
