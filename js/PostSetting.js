import PostLimit from "./PostLimit.js";

export default class PostSetting {

  #maxPost;
  #limit;

  constructor(postDom) {
    this.#maxPost = Number.parseInt(postDom.innerText);
    this.#limit = new PostLimit();
  }

  #add() {
    if (this.#maxPost < this.#limit.getLimit()) {
      this.#maxPost++;
    }
  }

  #sub() {
    if (this.#maxPost) {
      this.#maxPost--;
    }
  }

  calc(dataFlag) {
    if (dataFlag === 'add') {
      this.#add();
    } else {
      this.#sub();
    }
  }

  setMaxPost(max) {
    this.#maxPost = max;
  }

  getMaxPost() {
    return this.#maxPost;
  }

}