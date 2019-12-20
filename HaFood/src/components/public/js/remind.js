function remind (remindtext) {
  let remindelement = document.createElement('div')
  remindelement.style.background = 'rgba(251, 126, 0, 0.5)'
  remindelement.style.color = '#f56c6c'
  remindelement.style.width = '400px'
  remindelement.style.height = '40px'
  remindelement.style.fontSize = '14px'
  remindelement.style.fontSize = '14px'
  remindelement.style.padding = '8px 16px'
  remindelement.style.position = 'fixed'
  remindelement.style.top = '80px'
  remindelement.style.margin = '0 50%'
  remindelement.style.left = '-200px'
  remindelement.style.borderRadius = '8px'
  remindelement.style.lineHeight = '24px'
  remindelement.innerText = remindtext
  document.querySelector('body').appendChild(remindelement)
  setTimeout(() => {
    remindelement.style.display = 'none'
  }, 1000)
}
export default remind
