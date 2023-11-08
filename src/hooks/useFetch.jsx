import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const res = await fetch(url);
      if (!res.ok)
        throw new Error(`${res.status}. something wrong with server`);
      const data = await res.json();
      setError("");
      setData({ ...data });
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return [data, error, loading];
};
