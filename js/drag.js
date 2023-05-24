let idx = 1;

// 스티커 만드는 함수

const createPost = (event, className) => {
  const newElem = document.createElement("div");
  const postTitle = document.createElement("h3");

  const postBody = document.createElement("div");
  const postList = document.createElement("ol");
  const postSubList = document.createElement("li");



  newElem.classList.add(className);
  newElem.style.left = `${event.offsetX}px`;
  newElem.style.top = `${event.offsetY}px`;

  postTitle.classList.add("sticker-title");
  postTitle.innerText = `스티커 메모${idx++}`;

  postBody.classList.add("sticker-body");

  postList.classList.add("memo");

  postSubList.classList.add('memos');
  postSubList.innerText = "메모가 없습니다. 클릭해서 메모를 등록해보세요";
  postList.appendChild(postSubList);
  postBody.appendChild(postList);


  newElem.appendChild(postTitle);
  newElem.appendChild(postBody);

  return newElem;
}

window.addEventListener("DOMContentLoaded", () => {

  const postArr = [];
  const postArea = document.querySelector(".postArea");
  const postSet = document.querySelector('#postNumber');

  let maxPost = postSet.value;

  postSet.addEventListener('change', e => {
    maxPost = e.currentTarget.value;
    if (maxPost < postArr.length) {
      for (i = 0; i < postArr.length - maxPost; i++) {
        postArr.shift().remove();
      }
    }
  });

  postArea.addEventListener('click', e => {


    if (isTarget(e)) {

      // 클릭한 영역이 스티커 메모일 경우

      console.log('클릭한 곳은 스티커 메모입니다!');
    } else {

      // 클릭한 영역이 일반 영역일 경우

      const newElem = createPost(e, 'post');

      if (postArr.length >= maxPost) {
        postArr.shift().remove();
      }

      postArr.push(newElem);

      e.currentTarget.appendChild(newElem);
    }

  });

  const isTarget = (e) => {
    const clicked = e.target.parentNode.classList;
    return clicked.length ? true : false;
  }

});