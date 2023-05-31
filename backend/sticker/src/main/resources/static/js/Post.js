// 스티커 메모를 생성하는 클래스

export default class Post {

  #postElem;

  // 스티커 메모의 제목을 생성

  static createTitle() {
    let postTitle = document.createElement("h3");
    Post.addClasses(postTitle, "sticker-title", "modifable");
    postTitle.innerText = '스티커 메모';

    Post.addEvent(postTitle, e => {
      let before = e.target;
      let after = Post.makeInputWrapper(before.innerText, false);
      before.innerText = "";
      before.appendChild(after);
    }, 'click');

    return postTitle;
  }


  // 글자 클릭 시, 자동으로 입력창 발생하는 메소드

  static makeInputWrapper(beforeValue, removeFlag) {
    let bV = beforeValue ? beforeValue : " ";

    let wrapper = document.createElement("div");
    let input = document.createElement("input");
    let button = document.createElement("button");

    wrapper.classList.add('sticker-write-box');

    input.classList.add('sticker-input');
    input.value = bV;
    button.classList.add('sticker-write');
    button.innerText = "작성";

    // 메모 수정 버튼 생성

    Post.addEvent(button, e => {
      let post = e.currentTarget.parentNode.parentNode.parentNode;
      let list = e.currentTarget.parentNode.parentNode;
      wrapper.remove();

      list.innerText = input.value;

    }, 'click')

    wrapper.appendChild(input);
    wrapper.appendChild(button);

    // 삭제 버튼 생성

    if (removeFlag) {
      let deleteBtn = document.createElement("button");
      deleteBtn.classList.add('list-delete');
      deleteBtn.innerText = "삭제";

      Post.addEvent(deleteBtn, e => {
        let list = e.currentTarget.parentNode.parentNode;
        wrapper.remove();
        list.remove();
      }, 'click')

      wrapper.appendChild(deleteBtn);
    }

    return wrapper;
  }


  static createBody() {
    let postBody = document.createElement("div");
    let listAddBtn = document.createElement("button");

    listAddBtn.classList.add('list-add');
    listAddBtn.innerHTML = "<i class='xi-plus'></i>";

    Post.addEvent(listAddBtn, e => {
      let target = e.currentTarget.parentNode;
      let list = target.children[0];

      list.appendChild(Post.createSubList());

    }, 'click');

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
      let after = Post.makeInputWrapper(before.innerText, true);
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