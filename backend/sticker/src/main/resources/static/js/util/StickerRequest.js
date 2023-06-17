import Post from "/js/Post.js";

/*
  화면에 생성된 스티커를 DB에 저장한다.
  content: object
 */

const saveSticker = content => {
    fetch("/sticker", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(content)
    })
    .then(res => {
        if(res.status === 200) {
          return true;
        }
    })
};

export {saveSticker};

const updateSticker = updateData => {
    fetch("/sticker/title", {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(updateData)
    })
        .then(res => {
            if(res.status === 200) {
                return true;
            }
        })
};

export {updateSticker};

const getLatestStickerId = () => {
    fetch("/sticker/latest")
        .then(res => res.json())
        .then(res => {
            Post.setStickerId(res.latest);
        })

};

export {getLatestStickerId};