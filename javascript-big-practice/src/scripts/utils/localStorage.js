export default class LocalStorage {
  setItems(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItems(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  removeItems(key) {
    localStorage.removeItem(key);
  }
}
