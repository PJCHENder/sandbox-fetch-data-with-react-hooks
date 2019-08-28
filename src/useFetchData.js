import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const fetchDataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case "FETCH_FAILED":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};

const useFetchData = ({ initialData, initialFetchUrl }) => {
  const [{ data, isLoading, isError }, dispatch] = useReducer(
    fetchDataReducer,
    {
      data: initialData,
      isLoading: false,
      isError: false
    }
  );

  const [fetchUrl, setFetchUrl] = useState(initialFetchUrl);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: "FETCH_INIT"
      });
      try {
        const response = await axios.get(fetchUrl);
        dispatch({
          type: "FETCH_SUCCESS",
          payload: {
            hits: response.data.hits
          }
        });
      } catch (error) {
        dispatch({
          type: "FETCH_FAILED"
        });
      }
    };

    fetchData();
  }, [fetchUrl]);

  return [
    {
      data,
      isLoading,
      isError
    },
    setFetchUrl
  ];
};

export default useFetchData;
