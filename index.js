// Constants required for conversion between Celsius & Fahrenheit
const zeroInCelsius = 32  // This is the Celsius version of the freezing point
const tempConvOffset5 = 5 // Celsius-to-F factor to be used for conversion 
const tempConvOffset9 = 9 // Fahrenheit to Celsius conversion factor

// Create input fields for numeric values in both Mister Celsius and Miss Fahrenheit. 
// This will be used in the temperature conversion logic.
const elems = {
  celsius: document.querySelector("input#celsius"),
  fahrenheit: document.querySelector("input#fahrenheit"),
}

// Convert Celsius to Fahenheit for non-Metric users. 
function celsiusToFahrenheit(temp) {
  console.log(`celsiusToFahrenheit - temperature: ${ temp }`)
  return (temp * tempConvOffset9) / tempConvOffset5 + zeroInCelsius
}

// Convert a temperature from Fahenheit to Celsius
function fahrenheitToCelsius(temp) {
  return ((temp - zeroInCelsius) * tempConvOffset5) / tempConvOffset9
}

// Process a change in the Celsius temperature as input by the user
function onCelsiusInput(event) {
  const { value } = event.target
  fahrenheit.value = celsiusToFahrenheit(value).toFixed(2)
}

// Process a change in the Fahrenheit temperature as input by the user
function onFahrenheitInput(event) {
  const { value } = event.target
  celsius.value = fahrenheitToCelsius(value).toFixed(2)
}

// This is another comment in this file
