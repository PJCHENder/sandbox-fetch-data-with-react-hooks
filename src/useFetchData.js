import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = ({ initialData, initialFetchUrl }) => {
  const [fetchUrl, setFetchUrl] = useState(initialFetchUrl);
  const [data, setData] = useState(initialData);
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
