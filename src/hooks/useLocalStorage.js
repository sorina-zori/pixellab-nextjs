import { useEffect, useState } from "react";

// keyName => key name in local storage
export const useLocalStorage = (keyName, defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const [cache, setCache] = useState("");

  useEffect(() => {
    const savedValue = localStorage.getItem(keyName);

    // verifica daca aveam ceva in localStorage
    // daca da, adauga in state
    if (savedValue !== null) {
      setValue(savedValue);
      setCache(savedValue);
    }
  }, [setValue, keyName]);

  useEffect(() => {
    // no early returns
    if (value !== cache) {
      localStorage.setItem(keyName, value);
      setCache(value);
    }
  }, [value, keyName, cache]);

  return [value, setValue];
};
