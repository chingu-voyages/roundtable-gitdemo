const zeroInCelcius = 32 // This is a comment
const tempConvOffset5 = 5 // Celcius to Fahrenheit conversion factor
const tempConvOffset9 = 9

// Create input fields for temperature values in both Celcius and Fahrenheit. 
// This will be used in the temperature conversion logic.
const elems = {
  celsius: document.querySelector("input#celsius"),
  fahrenheit: document.querySelector("input#fahrenheit"),
}

<<<<<<< HEAD
// Convert Celcius to Fahrenheit for non-Metric users
=======
// Convert Celcius to Fahenheit for non-Metric users. In other words, from Celcius to Imperial.
>>>>>>> b3b7392882c1d277cc42b61f69fd8125a24019c4
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

// Process a change in the Fahrenheit temperature as input by the user
function onFahrenheitInput(event) {
  const { value } = event.target
  celsius.value = fahrenheitToCelsius(value).toFixed(2)
}
