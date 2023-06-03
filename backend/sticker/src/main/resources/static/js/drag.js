import { isTarget } from '/js/DomControl.js';
import PostSetting from '/js/PostSetting.js';
import Post from '/js/Post.js';

window.addEventListener("DOMContentLoaded", () => {

  let PostCntDom = document.querySelector('#postNumber');

  const postArr = [];
  const postArea = document.querySelector(".postArea");
  const postModify = document.querySelectorAll('.numberSetting i');

  const PostSet = new PostSetting(PostCntDom);

  postModify.forEach(val => {
    let calc = val.getAttribute("data-calc");
    val.addEventListener('click', e => {
      PostSet.calc(calc);
      if (PostSet.getMaxPost() < postArr.length) {
        for (let i = 0; i < postArr.length - PostSet.getMaxPost(); i++) {
          postArr.shift().remove();
        }
      }
      document.querySelector('#postNumber').innerText = PostSet.getMaxPost();
    });
  })

  postArea.addEventListener('click', e => {

    if (!isTarget(e)) {

      // 클릭한 영역이 일반 영역일 경우

      const post = new Post(e);
      const newElem = post.getPost();

      if (postArr.length >= PostSet.getMaxPost()) {
        postArr.shift().remove();
      }

      postArr.push(newElem);

      e.currentTarget.appendChild(newElem);

    }

  });

});