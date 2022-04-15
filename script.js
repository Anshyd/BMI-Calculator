console.log('Script.js');

let button = document.getElementById('calculate');

function calulateBMI(){
    let height = parseInt(document.getElementById('heightInput').value);
    let weight = parseInt(document.getElementById('weightInput').value);
    let results = document.getElementById('resultsId');
    height /= 100;
    height *= height;
    let bmi = weight/ height
    bmi = bmi.toFixed(1)
    results.innerText = 'Your Body Mass Index is: '+bmi
    if(bmi<18.5){
        results.innerText = "You are Under Weight with BMI of: " + bmi
    }
    else if(bmi<30.0){
        results.innerText = "You are Over Weight or Obesity: " + bmi
    }
    if (weight === 0 && height === 0) { results.innerText = "Height and Weight cannot be Zero. Please Enter A Legit Value"
    }
    else if(height === 0) { results.innerText = "Height cannot be zero"}
    else if(weight === 0) { results.innerText = "Weight cannot be zero"}
    height = ""
    weight = ""
}
button.addEventListener('click',calulateBMI);