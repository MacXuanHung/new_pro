import { makeAutoObservable } from 'mobx';

class FormStore {
  constructor() {
    makeAutoObservable(this);
  }
  title = '';
  description = '';
  status = '';
  deadline = '';

  handleOnChange = (e) => {
    if (e.target) {
      this[e.target.name] = e.target.value;
    } else {
      this.deadline = e.target.value;
    }
  };
}
const formStore = new FormStore();
export default formStore;
