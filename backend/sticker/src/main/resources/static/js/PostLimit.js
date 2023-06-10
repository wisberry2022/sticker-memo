export default class PostLimit {

    static #limit = 5;

    constructor() {
    }

    add() {
        PostLimit.#limit++;
    }

    sub() {
        if (PostLimit.#limit > 0) {
            PostLimit.#limit--;
        }
    }

    getLimit() {
        return PostLimit.#limit;
    }

}