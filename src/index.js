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
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(fetchUrl);
        setData({
          hits: response.data.hits
        });
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="App ">
      <h1>Fetch data with React Hooks</h1>
      <form
        className="pure-form"
        onSubmit={e => {
          e.preventDefault();
          setFetchUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
        }}
      >
        <div className="pure-control-group">
          <input
            type="text"
            className="pure-input-rounded"
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
          <button type="submit" className="pure-button button-small">
            Search
          </button>
        </div>
      </form>

      {isError && <p>Something went wrong...</p>}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
