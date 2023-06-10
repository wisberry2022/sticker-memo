/*
  화면에 생성된 스티커를 DB에 저장한다.
  content: object
 */

const saveSticker = (content) => {
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