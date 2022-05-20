export default class Storage{

  static saveData(key,data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

}
