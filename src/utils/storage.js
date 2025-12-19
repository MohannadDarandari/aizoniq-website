/**
 * Storage Manager
 * Wrapper around localStorage with error handling
 */

export class StorageManager {
  /**
   * Store value in localStorage
   */
  set(key, value) {
    try {
      const serialized = JSON.stringify(value);
      localStorage.setItem(key, serialized);
      return true;
    } catch (error) {
      console.error(`Storage error (set ${key}):`, error);
      return false;
    }
  }

  /**
   * Get value from localStorage
   */
  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Storage error (get ${key}):`, error);
      return null;
    }
  }

  /**
   * Remove value from localStorage
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Storage error (remove ${key}):`, error);
      return false;
    }
  }

  /**
   * Clear all localStorage
   */
  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Storage error (clear):', error);
      return false;
    }
  }

  /**
   * Check if key exists
   */
  has(key) {
    return localStorage.getItem(key) !== null;
  }

  /**
   * Get all keys
   */
  keys() {
    return Object.keys(localStorage);
  }

  /**
   * Get storage size (approximate)
   */
  getSize() {
    let size = 0;
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        size += localStorage[key].length + key.length;
      }
    }
    return size;
  }
}

// Export singleton instance
export const storage = new StorageManager();
