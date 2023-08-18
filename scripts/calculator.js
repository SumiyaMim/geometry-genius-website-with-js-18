function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    // console.log(base);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    // console.log(height);

    // validate
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return
    }

    // calculate area
    const area = 0.5 * base * height;
    // console.log(area);

    // show triangle area 
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

     // add to calculation entry
     addToCalculationEntry('Triangle', area)
}

function calculateRectangleArea() {
    // get rectangle width
    const widthField = document.getElementById('rectangle-width')
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    // console.log(width);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    // console.log(length);

    // validate input: width and length
    if(isNaN(width) || isNaN(length)){
        alert('Please insert a number');
        return;
    }

    // calculate area
    const area = width * length;

    // show rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    // add to calculation entry
    addToCalculationEntry('Rectangle', area)
}

// reusable function --> reduce duplicate code
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    // validate
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return
    }

    // calculate area
    const area = base * height;

    setElementInnerText('parallelogram-area', area);

    // add to calculation entry
    addToCalculationEntry('Parallelogram', area)
}

function calculateEllipseArea(){
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');

    // validate
    if(isNaN(majorRadius) || isNaN(minorRadius)){
        alert('Please insert a number');
        return
    }

    // calculate area
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);

    setElementInnerText('ellipse-area', areaTwoDecimal);

    // add to calculation entry
    addToCalculationEntry('Ellipse', areaTwoDecimal)
}

function calculateRhombusArea(){
    const diagonalOne = getInputValue('rhombus-diagonal-one');
    const diagonalTwo = getInputValue('rhombus-diagonal-two');

    // validate
    if(isNaN(diagonalOne) || isNaN(diagonalTwo)){
        alert('Please insert a number');
        return
    }

    // calculate area
    const area = 0.5 * diagonalOne * diagonalTwo;

    setElementInnerText('rhombus-area', area);

    // add to calculation entry
    addToCalculationEntry('Rhombus', area)
}

function calculatePentagonArea(){
    const pentagonPerimeter = getInputValue('pentagon-perimeter');
    const pentagonApothem = getInputValue('pentagon-apothem');

    // validate
    if(isNaN(pentagonPerimeter) || isNaN(pentagonApothem)){
        alert('Please insert a number');
        return
    }

    // calculate area
    const area = 0.5 * pentagonPerimeter * pentagonApothem;

    setElementInnerText('pentagon-area', area);

    // add to calculation entry
    addToCalculationEntry('Pentagon', area)
}

// reusable get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reusable set text at span, p, div, etc 
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}

// add to calculation entry
function addToCalculationEntry(areaType, area){
    // console.log(areaType+ ' '  + area)
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4', 'text-xs', 'text-gray-600', 'font-semibold', 'flex', 'justify-between', 'items-center');
    p.innerHTML = `${count + 1}. ${areaType} <span>${area} cm<sup>2</sup></span> <button class="bg-[#1090D8] px-2 py-1 text-white text-xs rounded-md font-semibold">Convert</button>`;

    calculationEntry.appendChild(p);

}

// Data validation 
/**
 * 1. set the proper type of the input field. (number, data, email)
 * 2. check type using typeof
 * 3. NaN means: Not a Number.  isNaN is checking whether the input is not a number or not
*/