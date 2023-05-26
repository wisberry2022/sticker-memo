import {isTarget} from './DomControl.js';
import Post from './Post.js';

window.addEventListener("DOMContentLoaded", () => {

  const postArr = [];
  const postArea = document.querySelector(".postArea");
  const postSet = document.querySelector('#postNumber');

  let maxPost = postSet.value;

  postSet.addEventListener('change', e => {
    maxPost = e.currentTarget.value;
    if (maxPost < postArr.length) {
      for (let i = 0; i < postArr.length - maxPost; i++) {
        postArr.shift().remove();
      }
    }
  });

  postArea.addEventListener('click', e => {

    if (!isTarget(e)) {

      // 클릭한 영역이 일반 영역일 경우

      const post = new Post(e);
      const newElem = post.getPost();

      if (postArr.length >= maxPost) {
        postArr.shift().remove();
      }

      postArr.push(newElem);

      e.currentTarget.appendChild(newElem);

    }

  });

});