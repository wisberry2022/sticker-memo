export default class Post {
  
  #postElem;

  static createTitle() {
    let postTitle = document.createElement("h3");
    Post.addClasses(postTitle, "sticker-title", "modifable");
    postTitle.innerText = '스티커 메모';

    return postTitle;
  }

  static createBody() {
    let postBody = document.createElement("div");
    postBody.appendChild(Post.createList());
    postBody.classList.add('sticker-body');
    
    return postBody;
  }

  static createList() {
    let postList = document.createElement("ol");
    postList.classList.add("memo");

    postList.appendChild(Post.createSubList());

    return postList;
  }

  static createSubList() {
    let postSubList = document.createElement("li");
    Post.addClasses(postSubList, "memos", "modifiable");

    postSubList.innerText = "메모가 없습니다. 클릭해서 메모를 등록해보세요";
    return postSubList;
  }

  static addClasses(elem, ...classes) {
    classes.map(names => {
      elem.classList.add(names);
    })
  }

  static addEvent(elem, callback, eventType) {
    elem.addEventListener(eventType, callback);
  }

  constructor(event) {
    this.#postElem = document.createElement("div");
    this.#postElem.appendChild(Post.createTitle());
    this.#postElem.appendChild(Post.createBody());

    this.#postElem.classList.add('post');
    this.#postElem.style.left = `${event.offsetX}px`;
    this.#postElem.style.top = `${event.offsetY}px`;
  }

  getPost() {
    return this.#postElem;
  }
  
  addEvent(classname, callback, eventType) {
    console.log(this.#postElem.children);
    let size = this.#postElem.children.length;
    for(let i = 0; i<size; i++) {
      this.#postElem
    }
  }
  

}