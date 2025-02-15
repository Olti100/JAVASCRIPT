// var btn = document.getElementById("btn");

// btn.onclick = function(){
//     btn.setAttribute("class","test");
// }

// var btn1 = document.getElementById("btn1");
// var btn2 = document.getElementById("btn2");
// var btn3 = document.getElementById("btn3");
// var c1 = document.getElementById("c1");
// var s2 = document.getElementById("s2");
// var t3 = document.getElementById("t3");

// btn1.onclick = function(){
//     c1.setAtributte("class", "circle");
// }

// btn2.onclick = function(){
//     s2.setAtributte("class", "square");
// }

// btn3.onclick = function(){
//     t3.setAtributte("class", "triangle");
// }

// c1.onclick = function(){
//     c1.setAtributte("class", "hide");
// }

// s2.onclick = function(){
//     s2.setAtributte("class", "hide");
// }

// t3.onclick = function(){
//     t3.setAtributte("class", "hide");
// }
var dark = document.getElementById("dark");
var body = document.querySelector("body");

dark.onclick = function (){
    body.classList.toggle("dark");
}


var btn = document.getElementById("btn");
var p = document.querySelector("p");

btn.onclick = function(){
    p.classList.toggle("hidden");

    if(p.classList.contains("hidden")){
        btn.textContent = "Show";
    
    } else {
        btn.textContent = "Hide";
    }
}

