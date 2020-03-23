import { useState, useEffect } from 'react';

const fetchData = async (url, signal, setFetchState) => {
  try {
    const rsp = await fetch(url, { signal });
    const json = await rsp.json();
    console.log(rsp)
    setFetchState(oldState => ({
      ...oldState,
      json,
      loading: false
    }));
  } catch (err) {
    const error = err.name !== 'AbortError' ? err.message : null;

    setFetchState(oldState => ({
      ...oldState,
      error,
      loading: false
    }));
  }
};

const useAbortableFetch = url => {
  const [fetchState, setFetchState] = useState({
    json: null,
    loading: false,
    error: null,
    controller: null
  });

  useEffect(
    () => {
      const controller = new AbortController();
      setFetchState({
        json: null,
        loading: true,
        error: null,
        controller
      });

      fetchData(url, controller.signal, setFetchState);

      return () => controller.abort();
    },
    [url]
  );

  return {
    json: fetchState.json,
    loading: fetchState.loading,
    error: fetchState.error,
    abort: () => fetchState.controller && fetchState.controller.abort()
  };
};

export default useAbortableFetch;