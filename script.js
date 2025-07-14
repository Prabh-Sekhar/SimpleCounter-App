let minValue = parseInt(document.querySelector('#minValue').value);
let maxValue = parseInt(document.querySelector('#maxValue').value);
let counter = minValue;

const range = document.querySelector('#range');
const countNum = document.querySelector('#countNum');

updateDisplay();

function updateDisplay() {
    range.innerHTML = `Range: ${minValue} to ${maxValue}`;
    countNum.innerHTML = String(counter);
}

function minValueInput() {
    let newMinValue = parseInt(document.querySelector('#minValue').value);

    if(isNaN(newMinValue)) {
        newMinValue = 0;
    }

    if(newMinValue > maxValue) {
        newMinValue = maxValue;
        document.querySelector('#minValue').value = maxValue;
    }

    minValue = newMinValue;

    if(counter < minValue) {
        counter = minValue;
    }
    
    updateDisplay();
}

function maxValueInput() {
    let newMaxValue = parseInt(document.querySelector('#maxValue').value);
    if(isNaN(newMaxValue)) {
        newMaxValue = 10;
    }
    
    if(newMaxValue < minValue) {
        newMaxValue = minValue;
        document.querySelector('#maxValue').value = minValue;
    }

    maxValue = newMaxValue;

    if(counter > maxValue) {
        counter = maxValue;
    }

    updateDisplay();
}


document.querySelector('#increment').addEventListener('click', () => {
    if(counter < maxValue) {
        counter++;
        countNum.innerHTML = String(counter);
    }

});

document.querySelector('#decrement').addEventListener('click', () => {
    if(counter > minValue) {
        counter--;
        countNum.innerHTML = String(counter);
    }
});

document.querySelector('#reset').addEventListener('click', () => {
    counter = minValue;
    countNum.innerHTML = String(counter);
});

