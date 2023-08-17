// fetch API를 사용하는 hook

import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (options, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState({ ...state, loading: false, data });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  if (!options.url) return;
  return { ...state, refetch };
};

export default function App() {
  const { loading, error, data, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(data);
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}
