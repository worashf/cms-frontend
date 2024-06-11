class LocalStorage {
    constructor(data = {}) {
      this.storageName = 'easy-fly-data';
      this.storage = this.load();
      this.save(data);
    }
  
    set = (key, value) => {
      this.storage[key] = value;
      this.save();
    };
  
    get = (key) => this.storage[key];
  
    remove = (key) => {
      this.storage[key] = '';
      this.save();
    };
  
    load = () => JSON.parse(localStorage.getItem(this.storageName)) || {};
  
    save = (newData = this.storage) => {
      let data = this.load();
      data = { ...data, ...newData };
      localStorage.setItem(this.storageName, JSON.stringify(data));
    };
  }
  
  export default LocalStorage;