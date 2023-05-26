export default class Post {
  
  #postElem;

  static createTitle() {
    let postTitle = document.createElement("h3");
    Post.addClasses(postTitle, "sticker-title", "modifable");
    postTitle.innerText = '스티커 메모';

    Post.addEvent(postTitle, e => {
      let before = e.target;
      let after = Post.makeInputWrapper("div");
      before.innerText = "";
      before.appendChild(after);
    }, 'click');

    return postTitle;
  }

  static makeInput() {
    let div = document.createElement("div");
    let input = document.createElement("input");
    let button = document.createElement("button");

    input.classList.add('sticker-input');
    button.classList.add('sticker-write');
    button.innerText = "작성";

    div.appendChild(input);
    div.appendChild(button);

    return div;
  }


  static makeInputWrapper(elem) {
    let wrapper = document.createElement(elem);
    let input = document.createElement("input");
    let button = document.createElement("button");
    wrapper.classList.add('sticker-write-box');
    input.classList.add('sticker-input');
    button.classList.add('sticker-write');
    
    button.innerText = "작성";
    wrapper.appendChild(input);
    wrapper.appendChild(button);

    Post.addEvent(button, e => {
      let post = e.currentTarget.parentNode.parentNode.parentNode;
      wrapper.remove();

      post.children[0].innerText = input.value;
      
    }, 'click')


    return wrapper;
  }

  static createBody() {
    let postBody = document.createElement("div");
    let listAddBtn = document.createElement("button");

    listAddBtn.classList.add('list-add');
    listAddBtn.innerHTML = "<i class='xi-plus'></i>";
    postBody.appendChild(Post.createList());
    postBody.appendChild(listAddBtn);
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
    let listAddBtn = document.createElement("button");

    listAddBtn.innerText = "리스트 추가";

    Post.addClasses(postSubList, "memos", "modifiable");

    Post.addEvent(postSubList, e => {
      let before = e.target;
      let after = Post.makeInput("li");
      before.innerText = "";
      before.appendChild(after);
      
    }, 'click');

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
  
  
  

}