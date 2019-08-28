import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = () => {
  const [fetchUrl, setFetchUrl] = useState(
    `https://hn.algolia.com/api/v1/search`
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
