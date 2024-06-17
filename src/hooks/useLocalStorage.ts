import Storage from '../utils/Storage';

interface ILocalStorage {
  getData: <T>(key: string) => T | null;
  setData: <T>(key: string, value: T) => boolean;
  removeData: (key: string) => boolean;
}

const useLocalStorage = (): ILocalStorage => {
  const { getData, setData, removeData } = Storage;

  return {
    getData: <T>(key: string): T | null => getData<T>(key),
    setData: <T>(key: string, value: T): boolean => setData(key, value),
    removeData: (key: string): boolean => removeData(key),
  };
};

export default useLocalStorage;
