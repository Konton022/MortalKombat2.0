const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`;
  const minutes =
    now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`;
  const seconds =
    now.getSeconds() >= 10 ? now.getSeconds() : `0${now.getSeconds()}`;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  return currentTime;
};

const getRandom = (value) => {
  return Math.ceil(Math.random() * value);
};

function createElement(tag, tagClass, img) {
  const elem = document.createElement(tag);
  elem.classList.add(tagClass ? tagClass : null);
  if (tag == "img") {
    elem.src = img;
  }
  return elem;
}

export { getCurrentTime, getRandom, createElement };
