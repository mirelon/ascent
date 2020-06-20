function update() {
  let now = new Date()
  let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  let a = new Date() - startOfDay
  let b = Math.max(a-21600000, 0)
  let full = b / 1800000 + 36 * ((startOfDay - Date.parse('2020-05-18T00:00:00+0200')) / 86400000 - 30)
  document.getElementsByClassName('project-name')[0].textContent = full.toFixed(4) + ' m'
}

setInterval(update, 50)
