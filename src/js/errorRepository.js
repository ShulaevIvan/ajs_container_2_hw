export default class ErrorRepository {
  constructor() {
    this.container = new Map();
  }

  translate(err) {
    const check = this.container.has(err);
    if (check) {
      return this.container.get(err);
    }
    return 'Unknown error';
  }

  addErr(err, descr) {
    this.container.set(err, descr);
  }
}

const repo = new ErrorRepository();
repo.addErr('2', 'testset2');
console.log(repo.translate('2'));
console.log(repo.translate('3'));
