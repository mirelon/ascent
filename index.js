const DAY_MS = 86_400_000
const updateElements = (className, text) => {
  for (const element of document.getElementsByClassName(className)) {
    element.textContent = text
  }
}

function update() {
  const now = new Date()
  const birthDatesRaw = {
    'ja': '1988-05-21T00:00:00+0200',
    'livka': '1992-10-15T00:00:00+0200',
    'olivka': '2021-02-24T00:00:00+0100',
    'sarlotka': '2023-09-12T00:00:00+0200',
  }
  const birthDates = Object.fromEntries(Object.entries(birthDatesRaw).map(([el, birthDateRaw]) => [el, Date.parse(birthDateRaw)]))
  const agesInDays = Object.fromEntries(Object.entries(birthDates).map(([el, birthDate]) => [el, Math.floor((now - birthDate) / DAY_MS)]))
  Object.entries(agesInDays).forEach(([el, ageInDays]) =>
    updateElements(el, ageInDays),
  )
  const olivkaAkoSarlotka = birthDates['olivka'] + agesInDays['sarlotka'] * DAY_MS
  updateElements('olivka_ako_sarlotka', new Date(olivkaAkoSarlotka).toDateString())
}

setInterval(update, 50) // milliseconds
