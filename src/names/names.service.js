export default class NamesService {
  constructor() {
    this.data = ["a", "b"];
  }

  remove(name) {
    this.data.splice(this.data.indexOf(name));
  }
}
