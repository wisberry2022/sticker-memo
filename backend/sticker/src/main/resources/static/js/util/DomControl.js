// 클릭한 영역이 스티커메모인지 확인하는 함수

const isTarget = (e) => {
  const clicked = e.target.parentNode.classList;
  return clicked.length ? true : false;
}

export {isTarget}

// 클래스 토글을 위한 함수

const toggleClass = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
    return;
  }
  element.classList.add(className);
}

export { toggleClass };