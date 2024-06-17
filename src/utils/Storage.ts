/**
 * Get data from local storage.
 *
 * @param {string} key - Storage key
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
 * Set data to local storage.
 *
 * @param {string} key - Storage key
 * @param {T} value - Storage value
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
 * Remove data from local storage.
 *
 * @param {string} key - Storage key
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
