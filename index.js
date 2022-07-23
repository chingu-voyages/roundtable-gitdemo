const zeroInCelcius = 32

const elems = {
  celsius: document.querySelector("input#celsius"),
  fahrenheit: document.querySelector("input#fahrenheit"),
}

// Convert Celcius to Fahenheit for non-Metric users
function celsiusToFahrenheit(temp) {
  console.log('celsiusToFahrenheit - temp: ', temp)
  return (temp * 9) / 5 + zeroInCelcius
}

// Convert a temperature from Fahenheit to Celcius
function fahrenheitToCelsius(temp) {
  return ((temp - zeroInCelcius) * 5) / 9
}

// Process a change in the Celcius temperature as input by the user
function onCelsiusInput(event) {
  const { value } = event.target
  fahrenheit.value = celsiusToFahrenheit(value).toFixed(2)
}

function onFahrenheitInput(event) {
  const { value } = event.target
  celsius.value = fahrenheitToCelsius(value).toFixed(2)
}
