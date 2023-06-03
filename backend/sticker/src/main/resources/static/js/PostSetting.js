export default class PostSetting {

    #maxPost;
    #limit;

    constructor(postDom) {
        this.#maxPost = Number.parseInt(postDom.innerText);
        this.#limit = 5;
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

    getMaxPost() {
        return this.#maxPost;
    }

    getLimit() {
        return this.#limit;
    }

}