

//var calc
let FirstNumber = 0;
let operator;
let SecondNumber = 0;
//let FirstNumberHtml = document.createElement("p");
let Calculo="";
//screen
let screenDiv = document.getElementById("Calculator__screen");

function addToP(char) {
 return Calculo=Calculo+char;
}
function appendP() {
screenDiv.innerHTML=Calculo;
}
//buttons
let button1 = document
  .getElementById("one")
  .addEventListener("click", function () {
   addToP("1");
   appendP();
  });
let button2 = document
  .getElementById("two")
  .addEventListener("click", function () {
    addToP("2");appendP();
  });
let button3 = document
  .getElementById("three")
  .addEventListener("click", function () {
    addToP("3");appendP();
  });
  let button4 = document
  .getElementById("four")
  .addEventListener("click", function () {
   addToP("4");
   appendP();
  });
let button5 = document
  .getElementById("five")
  .addEventListener("click", function () {
    addToP("5");appendP();
  });
let button6 = document
  .getElementById("six")
  .addEventListener("click", function () {
    addToP("6");appendP();
  });
  let button7 = document
  .getElementById("seven")
  .addEventListener("click", function () {
   addToP("7");
   appendP();
  });
let button8 = document
  .getElementById("height")
  .addEventListener("click", function () {
    addToP("8");appendP();
  });
let button9 = document
  .getElementById("nine")
  .addEventListener("click", function () {
    addToP("9");appendP();
  });
  let dot = document
  .getElementById("dot")
  .addEventListener("click", function () {
    addToP(".");appendP();
  });


//operator buttons
let add = document
  .getElementById("plus")
  .addEventListener("click", function () {
    addToP("+");appendP();
  });
let rest= document
  .getElementById("rest")
  .addEventListener("click", function () {
    addToP("-");appendP();
  });
  let mult= document
  .getElementById("mult")
  .addEventListener("click", function () {
    addToP("*");appendP();
  });
  let divi= document
  .getElementById("divi")
  .addEventListener("click", function () {
    addToP("/");appendP();
  });
  let firstPar= document
  .getElementById("(First)")
  .addEventListener("click", function () {
    addToP("(");appendP();
  });
  let SecPar= document
  .getElementById("(Sec)")
  .addEventListener("click", function () {
    addToP(")");appendP();
  });

// = and clean buttons
let Equal = document
  .getElementById("Equal")
  .addEventListener("click", function () {
    let getCalc=screenDiv.outerText;
    let equal=Function("return " + getCalc)();
    Calculo=equal;
    if(equal!=undefined){screenDiv.innerText=equal;}
    else{Calculo=""}

    console.log(equal);
  });
  let CA = document
  .getElementById("ca")
  .addEventListener("click", function () {
    
    screenDiv.innerText="";
Calculo="";
  });