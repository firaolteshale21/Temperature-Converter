const fahrenheitToCelsius = document.getElementById("fahrenheitTocelsius");
const celsiusToFahrenheit = document.getElementById("Celsiustofahrenheit");
const answer = document.getElementById("answer");

function convert() {
  const userInput = parseFloat(document.getElementById("userinput").value);
  let temp;

  if (fahrenheitToCelsius.checked) {
    answer.style.color = 'black';
    temp = (userInput - 32) * 5 / 9;
    answer.textContent = temp.toFixed(1) + " °C";
  } else if (celsiusToFahrenheit.checked) {
    answer.style.color = 'black';
    temp = (userInput * 9 / 5) + 32;
    answer.textContent = temp.toFixed(1) + " °F";
  }else if(isNaN(userInput)){
    answer.textContent = "Please Insert Value to be Converted";
    answer.style.color = 'red';
  }
  else{
    answer.style.color = 'red';
    answer.textContent = "Select Conversion"
  }
}
function reset() {
    document.getElementById("userinput").value = "";
    answer.textContent = "";
    document.getElementById("fahrenheitTocelsius").checked = false;
    document.getElementById("Celsiustofahrenheit").checked = false;
  }
  function swap(){
    if(fahrenheitToCelsius.checked){
        document.getElementById("fahrenheitTocelsius").checked = false;
        document.getElementById("Celsiustofahrenheit").checked = true;

    }else if(celsiusToFahrenheit.checked){
        document.getElementById("fahrenheitTocelsius").checked = true;
        document.getElementById("Celsiustofahrenheit").checked = false;
    }else{
        return;
    }
  }