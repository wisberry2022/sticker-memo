import Post from "./Post.js";

export default class PostSetting {

  #maxPost;
  static #limit;

  constructor(postDom) {
    this.#maxPost = Number.parseInt(postDom.innerText);
    Post.limit = 5;
  }

  #add() {
    if (this.#maxPost < this.#limit) {
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

  setLimit(limit) {
    Post.limit = limit;
  }

  getMaxPost() {
    return this.#maxPost;
  }

  getLimit() {
    return this.#limit;
  }

}