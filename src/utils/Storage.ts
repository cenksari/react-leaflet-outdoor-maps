/**
 * Retrieves data from local storage with the specified key.
 *
 * @param {string} key - The key used to identify the data in local storage.
 * @return {T | null} The data retrieved from local storage, or null if no data is found or an error occurs.
 */
const getData = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

/**
 * Sets the value of a key in local storage.
 *
 * @param {string} key - The key to set the value for.
 * @param {T} value - The value to set.
 * @return {boolean} Returns true if the value was successfully set, false otherwise.
 */
const setData = <T>(key: string, value: T): boolean => {
  try {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));

      return true;
    }

    return false;
  } catch {
    return false;
  }
};

/**
 * Removes the value associated with the specified key from the local storage.
 *
 * @param {string} key - The key of the value to remove.
 * @return {boolean} Returns true if the value was successfully removed, false otherwise.
 */
const removeData = (key: string): boolean => {
  try {
    localStorage.removeItem(key);

    return true;
  } catch {
    return false;
  }
};

export default {
  getData,
  setData,
  removeData,
};
