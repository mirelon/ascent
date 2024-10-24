// fn: () => Promise<number>
const updateProgressBar = async (id, fn) => {
  const progress = await fn()
  const progressHumanReadable = `${Math.floor(progress * 100000) / 1000}%`
  console.info(`Progress of ${id}: ${progressHumanReadable}`)
  document.getElementById(id).style.width = progressHumanReadable
  document.getElementById(id).title = `Progress: ${progressHumanReadable}`
}

const updateCabBackendProgressBar = (id, url) => updateProgressBar(id, () =>
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.info(data)
      const lastBlockSlot = data.lastBlockSlot
      const ledgerSlot = data.ledgerSlot
      console.info(lastBlockSlot, ledgerSlot, lastBlockSlot / ledgerSlot)
      return lastBlockSlot / ledgerSlot
    }))

export const updateProgressBars = () =>
  Promise.all([
    updateCabBackendProgressBar('progress-cab-backend-staging-preprod', 'https://cab-server.preprod.staging.wingriders.com/healthcheck'),
    updateCabBackendProgressBar('progress-cab-backend-staging-mainnet', 'https://cab-server.mainnet.staging.wingriders.com/healthcheck'),
  ])