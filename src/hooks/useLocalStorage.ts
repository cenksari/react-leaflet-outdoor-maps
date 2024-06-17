import Storage from '../utils/Storage';

// interfaces
interface ILocalStorage {
  getData: <T>(key: string) => T | null;
  setData: <T>(key: string, value: T) => boolean;
  removeData: (key: string) => boolean;
}

/**
 * Returns an object with methods for getting, setting, and removing data from local storage.
 *
 * @return {ILocalStorage} An object with the following methods:
 *   - `getData<T>(key: string): T | null` - Retrieves data from local storage with the specified key.
 *   - `setData<T>(key: string, value: T): boolean` - Sets the value of a key in local storage.
 *   - `removeData(key: string): boolean` - Removes the value associated with the specified key from local storage.
 */
const useLocalStorage = (): ILocalStorage => {
  const { getData, setData, removeData } = Storage;

  return {
    getData: <T>(key: string): T | null => getData<T>(key),
    setData: <T>(key: string, value: T): boolean => setData(key, value),
    removeData: (key: string): boolean => removeData(key),
  };
};

export default useLocalStorage;
