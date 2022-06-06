//area y parametro de un cuadrado
const valueResult = document.getElementById('result');

const perimSquare = (side) => side * 4;
const areaSquare = (side) => side * side;

function calculatePerimSquare(){
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    const result = `El perimetro de cuadrado es: ${perimSquare(value)}  cm`;
    valueResult.innerText = result;
}

function calculateAreaSquare(){
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    const result = `El area de cuadrado es: ${areaSquare(value)}  cm`;
    valueResult.innerText = result;
}

//area y parametro de un triangulo
const perimTriangle = (side1,side2,base) => side1 + side2 + base;
const areaTriangle = (base,height) => (base * height) / 2;

function calculatePerimTriangle(){
    let side1 = document.getElementById('inputSide1');
    let side2 = document.getElementById('inputSide2');
    let side3 = document.getElementById('inputSide3');

    side1 = Number(side1.value);
    side2 = Number(side2.value);
    side3 = Number(side3.value);

    const result = `El perimetro del triangulo es: ${perimTriangle(side1,side2,side3)}  cm`;
    valueResult.innerText=result;
}

function calculateAreaTriangle(){
    let base = document.getElementById('inputBase');
    let height = document.getElementById('inputHeight');

    base = Number(base.value);
    height = Number(height.value);

    const result = `El area del triangulo es: ${areaTriangle(base,height)}  cm^2`;
    valueResult.innerText=result;
}

//Area, diametro y perimetro de un circulo
const diameCircle = (radio) => radio*2;
const perimCircle = (radio) => diameCircle(radio) * Math.PI;
const areaCircle = (radio) => (radio * radio) * Math.PI;

function calculateDiameCircle(){
    let radio= document.getElementById('inputRadio');
    radio = Number(radio.value);

    const result = `El diametro del circulo es: ${diameCircle(radio)}  cm`;
    valueResult.innerText=result;
}

function calculatePerimCircle(){
    let radio= document.getElementById('inputRadio');
    radio = Number(radio.value);

    const result = `El perimetro del circulo es: ${perimCircle(radio)}  cm`;
    valueResult.innerText=result;
}

function calculateAreaCircle(){
    let radio= document.getElementById('inputRadio');
    radio = Number(radio.value);

    const result = `El area del circulo es: ${areaCircle(radio)} cm^2`;
    valueResult.innerText=result;
}