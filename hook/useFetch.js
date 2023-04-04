import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY, RAPID_API_HOST } from "@env";
// import Constants from "expo-constants";

// const rapidApiKey = "";
// const rapidApiHost = "jsearch.p.rapidapi.com";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://tanu31195.github.io/data/react-native/meals-app/${endpoint}.json`,
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data);
      // setData(local.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      alert("There is an error while fetching data");
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
