window.onload = function (e) {
  /* 
    document.querySelector --> один элемент DOM
    document.querySelectorAll --> массив элементов DOM
  */

  let buttons = document.querySelectorAll('.actions input')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = btnClick
  }
}

function btnClick(e) {
  // this - это элемент DOM
  /* for (let k in this.attributes) {
    document.body.innerHTML += '<b>' + k + '</b> ' + this[k] + '<br>'
  } */

  let name = this.getAttribute('name')
  if (name == 'save') {
    console.log('1')
  } else if (name == 'delete') {
    console.log('2')
  }
}
