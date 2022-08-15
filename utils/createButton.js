function createButton(link) {
  // TODO：添加第二个参数mode = light | dark配置不同的字体和背景颜色
  // TODO：使用Object.assign()重写样式属性赋值
  let myDiv = document.createElement('a')
  myDiv.innerHTML = 'GitHub'
  myDiv.style.width = '80px'
  myDiv.style.textAlign = 'center'
  myDiv.style.lineHeight = '35px'
  myDiv.style.height = '35px'
  myDiv.style.position = 'absolute'
  myDiv.style.top = '40px'
  myDiv.style.left = '50px'
  myDiv.style.borderRadius = '10px'
  myDiv.style.boxShadow = '0px 10px 14px -7px #cdcdcd'
  myDiv.style.background = '#000'
  myDiv.style.color = '#fff'

  myDiv.addEventListener('click', () => {
    window.open(link)
  })
  myDiv.addEventListener('mouseover', () => {
    myDiv.style.cursor = 'pointer'
  })
  
  document.body.appendChild(myDiv)
}