var valorEmDolarTxt = prompt('Qual o valor em dólar você quer converter?')

var valorEmDolarNum = parseFloat(valorEmDolarTxt)

var valorEmReal = valorEmDolarNum * 5.50

alert(valorEmReal.toFixed(2))