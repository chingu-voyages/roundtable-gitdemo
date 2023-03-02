const zeroInCelcius = 32 // This is a comment
const tempConvOffset5 = 5
const tempConvOffset9 = 9

// Create input fields for temperature values
const elems = {
  celsius: document.querySelector("input#celsius"),
  fahrenheit: document.querySelector("input#fahrenheit"),
}

// Convert Celcius to Fahenheit for non-Metric users
// This is a really good comment created for Andre
function celsiusToFahrenheit(temp) {
  console.log('celsiusToFahrenheit - temperature: ', temp)
  return (temp * tempConvOffset9) / tempConvOffset5 + zeroInCelcius
}

// Convert a temperature from Fahenheit to Celcius
function fahrenheitToCelsius(temp) {
  return ((temp - zeroInCelcius) * tempConvOffset5) / tempConvOffset9
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
