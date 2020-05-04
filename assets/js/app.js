var loader = document.querySelector(".loader");
var load = document.querySelector("#load");
var main = document.querySelector("#main");
var body = document.querySelector("#root");


setTimeout(function slide(){
    load.style.top = "178px";
    load.style.opacity = "0";
},3000); //3

setTimeout(function visible(){
    load.style.opacity = "0";
    main.style.opacity = "1";
},4000); //4

setTimeout(function displayOut(){
    loader.style.display = "none";
},5000); //5

setTimeout(function bodyChg(){
    body.style.backgroundColor = "#d2f2ff";
    body.style.transition = "2s all";
    body.style.transitionTimingFunction = "ease-in";
},4000); //4


var c = document.querySelector(".color-container"); //color container
var g = document.querySelector("#green");   // green switch
var b = document.querySelector("#blue");    // blue switch
var o = document.querySelector("#orange");  // orange switch
// Functions to change the color
const green = () => {
    c.style.backgroundColor = "green"; //for green
}

const blue = () => {
    c.style.backgroundColor = "#0e185d";    //for blue
}

const orange = () => {
    c.style.backgroundColor = "#ea3f00";    //for orange
}