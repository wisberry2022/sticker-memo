import { isTarget } from '/js/util/DomControl.js';
import { saveSticker, getLatestStickerId } from '/js/util/StickerRequest.js';
import PostSetting from '/js/PostSetting.js';
import Post from '/js/Post.js';

window.addEventListener("DOMContentLoaded", () => {

  getLatestStickerId();

  let PostCntDom = document.querySelector('#postNumber');

  const postArr = [];
  const postArea = document.querySelector(".postArea");
  const postModify = document.querySelectorAll('.numberSetting i');

  let maxPost = Number.parseInt(PostCntDom.innerText);

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

      maxPost = Number.parseInt(document.querySelector('#postNumber').innerText);
      PostSet.setMaxPost(maxPost);


      // 클릭한 영역이 일반 영역일 경우

      const post = new Post(e);
      const newElem = post.getPost();

      if (postArr.length - PostSet.getMaxPost() >= 0) {
        let delCnt = postArr.length;
        for(let i = 0; i<=delCnt - PostSet.getMaxPost(); i++) {
          postArr.shift().remove();
        }
      }

      postArr.push(newElem);
      saveSticker({content: '스티커 메모'});

      e.currentTarget.appendChild(newElem);

    }
  });

});