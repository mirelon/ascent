const DAY_MS = 86_400_000
const updateElements = (className, text) => {
  for (const element of document.getElementsByClassName(className)) {
    element.textContent = text
  }
}

function update() {
  const now = new Date()
  const olivkaBirthDate = Date.parse('2021-02-24T00:00:00+0100')
  const sarlotkaBirthDate = Date.parse('2023-09-12T00:00:00+0200')
  const olivkaDays = Math.floor((now - olivkaBirthDate) / DAY_MS)
  const sarlotkaDays = Math.floor((now - sarlotkaBirthDate) / DAY_MS)
  const olivkaAkoSarlotka = olivkaBirthDate + sarlotkaDays * DAY_MS
  updateElements('olivka', olivkaDays)
  updateElements('sarlotka', sarlotkaDays)
  updateElements('olivka_ako_sarlotka', new Date(olivkaAkoSarlotka).toDateString())
}

setInterval(update, 50) // milliseconds
