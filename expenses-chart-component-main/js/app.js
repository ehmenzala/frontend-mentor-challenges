let total = 0, aux = 0, maxAmount = 0
const MAX_HEIGHT = 120
const $monBars = document.querySelectorAll('[id$=-bar]')
const $amountBoxes = document.querySelectorAll('.amount')

const r = document.querySelector(':root')
const rs = getComputedStyle(r)
const maxBarColor = rs.getPropertyValue('--max-bar-color')

fetch('../data.json')
  .then(res => res.json())
  .then(register => {
    register.forEach((registry, i) => {
      const { amount } = registry

      while (aux < register.length) {
        total += register[aux].amount
        if (register[aux].amount > maxAmount) maxAmount = register[aux].amount
        aux++
      }

      const height = (amount * 120) / maxAmount

      if (amount == maxAmount) {
        $monBars[i].style.backgroundColor = maxBarColor
      }

      $amountBoxes[i].textContent = amount
      $monBars[i].style.height = `${height}px`
    })
  })