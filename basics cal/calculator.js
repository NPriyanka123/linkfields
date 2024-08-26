let myInput=document.getElementById("myInput");
let zero=document.getElementById("0");
let one=document.getElementById("1");
let two=document.getElementById("2");
let three=document.getElementById("3");
let four=document.getElementById("4");
let five=document.getElementById("5");
let six=document.getElementById("6");
let seven=document.getElementById("7");
let eight=document.getElementById("8");
let nine=document.getElementById("9");
let plus=document.getElementById("+");
let sub=document.getElementById("-");
let mul=document.getElementById("x");
let div=document.getElementById("/");
let modulo=document.getElementById("%");
let dot=document.getElementById(".");
let reset=document.getElementById("c");
let equal=document.getElementById("equal");
let delete1=document.getElementById("delete");


function setZero(){
    var inputkey0='0';
    myInput.value=myInput.value+inputkey0;
}
function setOne(){
    var inputKey1='1';
    myInput.value=myInput.value+inputKey1;
}
function setTwo(){
    var inputKey2='2';
    myInput.value=myInput.value+inputKey2;
}
function setThree(){
    var inputKey3='3';
    myInput.value=myInput.value+inputKey3;
}
function setFour(){
    var inputkey4='4';
    myInput.value=myInput.value+inputkey4;
}
function setFive(){
    var inputkey5='5';
    myInput.value=myInput.value+inputkey5;
}
function setSix(){
    var inputKey6='6';
    myInput.value=myInput.value+inputKey6;
}
function setSeven(){
    var inputKey7='7';
    myInput.value=myInput.value+inputKey7;
}
function setPlus(){
    var inputKeyplus="+";
    myInput.value=myInput.value+inputKeyplus;
}
function setSub(){
    var inputKeysub='-';
    myInput.value=myInput.value+inputKeysub;
}
function setMul(){
    var inputKeymul='*';
    myInput.value=myInput.value+inputKeymul;
}
function setDiv(){
    var inputkeydiv='/';
    myInput.value=myInput.value+inputkeydiv;
}
function setModulo(){
    var inputkeymodulo='%';
    myInput.value=myInput.value+inputkeymodulo;
}
function setEight(){
    var inputKey8='8';
    myInput.value=myInput.value+inputKey8;
}
function setNine(){
    var inputKey9='9';
    myInput.value=myInput.value+inputKey9;
}
function setDot(){
    var inputdot=".";
    myInput.value=myInput.value+inputdot;
}
function evaluate(){
    myInput.value=eval(myInput.value);
}
function Reset(){
    myInput.value="";
}
function setDelete(){
    let input=myInput.value;
    myInput.value=input.slice(0,-1);
}

zero.addEventListener('click',setZero);
one.addEventListener('click',setOne);
two.addEventListener('click',setTwo);
three.addEventListener('click',setThree);
four.addEventListener('click',setFour);
five.addEventListener('click',setFive);
seven.addEventListener('click',setSeven);
six.addEventListener('click',setSix);
eight.addEventListener('click',setEight);
nine.addEventListener('click',setNine);
plus.addEventListener('click',setPlus);
sub.addEventListener('click',setSub);
mul.addEventListener('click',setMul);
div.addEventListener('click',setDiv);
modulo.addEventListener('click',setModulo);
equal.addEventListener('click',evaluate);
dot.addEventListener("click",setDot);
reset.addEventListener('click',Reset);
delete1.addEventListener('click',setDelete);
