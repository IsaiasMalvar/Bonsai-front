const useLocalStorage = () => {
  const setLocalStorageKey = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const getLocalStorageKey = (key: string) => {
    return localStorage.getItem(key);
  };

  const removeLocalStorage = (key: string) => {
    return localStorage.removeItem(key);
  };

  return { setLocalStorageKey, getLocalStorageKey, removeLocalStorage };
};

export default useLocalStorage;
