// 클릭한 영역이 스티커메모인지 확인하는 함수

const isTarget = (e) => {
  const clicked = e.target.parentNode.classList;
  return clicked.length ? true : false;
}

export {isTarget}