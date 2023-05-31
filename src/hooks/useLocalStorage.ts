const useLocalStorage = () => {
  const setLocalStorageKey = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  return { setLocalStorageKey };
};

export default useLocalStorage;
