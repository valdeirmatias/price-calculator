const price = Number(prompt("Price $: "))
const cash = price - (price * 0.10)
const installment = price / 3
alert(
  `Price $: ${price.toFixed(2)}\nCash $: ${cash.toFixed(2)}\nOr 3X of $: ${installment.toFixed(2)}`
)
