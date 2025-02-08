// var button1 = document.getElementById("btn1");
// console.log(button1)

// button1.onclick = function(){
//     console.log("hello");
// }

var button1 = document.querySelector("#btn3");
var buttonat = document.getElementsByClassName("butoni")
console.log(button1)

button1.onclick = function(){
    console.log("test")
}

// button1.addEventListener('click', function()){
//     console.log("Boni");
// }
var button1 = document.getElementById("btn1")
var button2 = document.getElementById("btn2")
var button3 = document.getElementById("btn3")

button1.onmuseover = function(){
    console.log("onmouseover")
}

button2.onmouseleave = function(){
    console.log("onmouseleave")
}

button3.onmousewheel = function(){
    console.log("onmousewheel")
}

var button4 = document.getElementById("btn4");
var txt = document.getElementById("txt1");

button4.onclick = function(){
    txt.style.color = "red";
    txt.style.backgroundColor = "lightbue";
    txt.style.textAlign = "center";
    txt.style.fontSize = "100px";
    txt.style.padding = "20px";
}

txt.onmouseover = function(){
    txt.style.cssText = "color:red; background-color:lightblue; text-align:center; font-size: 100px ; padding:20x";
}

button1.onclick = function(){
    txt.setAttribute("class", "test");
}

