/**
 * https://www.robinwieruch.de/react-hooks-fetch-data
 */

import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [data, setData] = useState({
    hits: [
      {
        objectID: 1,
        title: "Hello React",
        url: "https://www.google.com"
      },
      {
        objectID: 2,
        title: "Hello React Hooks",
        url: "https://www.google.com"
      },
      {
        objectID: 3,
        title: "Hello Sandbox",
        url: "https://www.google.com"
      }
    ]
  });

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
          {data.hits.map(hit => (
            <li className="pure-menu-item">
              <a href={hit.url} class="pure-menu-link">
                {hit.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
