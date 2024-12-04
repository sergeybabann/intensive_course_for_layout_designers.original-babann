window.onload = function (e) {
  document.body.addEventListener('click', some)

  document.body.addEventListener('contextmenu', some)
}

function some(e) {
  console.log(1)
}
