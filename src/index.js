/**
 * https://www.robinwieruch.de/react-hooks-fetch-data
 */

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

function App() {
  const [query, setQuery] = useState("");
  const [fetchUrl, setFetchUrl] = useState(
    "https://hn.algolia.com/api/v1/search"
  );
  const [data, setData] = useState({
    hits: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchUrl);
      setData({
        hits: response.data.hits
      });
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="App ">
      <h1>Fetch data with React Hooks</h1>
      <div className="pure-form">
        <div className="pure-control-group">
          <input
            type="text"
            className="pure-input-rounded"
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
          <button
            type="button"
            className="pure-button button-small"
            onClick={() => {
              setFetchUrl(
                `https://hn.algolia.com/api/v1/search?query=${query}`
              );
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="pure-menu">
        <ul className="pure-menu-list">
          {Array.isArray(data.hits) &&
            data.hits
              .filter(hit => hit.title)
              .map(hit => (
                <li className="pure-menu-item" key={hit.objectID}>
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
