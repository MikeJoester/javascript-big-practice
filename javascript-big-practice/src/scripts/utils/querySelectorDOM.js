function selectDOMClass(classes) {
  return document.querySelector(classes);
}

function selectDOMId(id) {
  return document.getElementById(id);
}

export { selectDOMClass, selectDOMId };
