// var input = document.getElementById("input_id");
// var input2 = document.getElementById("input_id2");
// var button = document.getElementById("btn_id");
// var text = document.getElementById("teksti_id");

// button.onclick = function(){
//     text.innerHTML = parseInt(input.value) + parseInt(input2.value)
// }

var text = "The best school in the world is Digital School";
var result = text.search("Digital School");

console.log(result)

var text = "The best school in the world is Digital School";
var result = text.replace(/Digital School/, "Another School")

console.log(result)

var text = "abcdef";
var regex = new RegExp("abc");
console.log(regex.test(text));

var text = "My school is the best school in the world";
var regex = /school/g;

console.log(text.match(regex))


var text = "My school is the best school in the world";
var regex = /o/g;

console.log(text.match(regex))

var text = "My school is the best school in the world";
var regex = /[yso]/g;

console.log(text.match(regex))


var text = "Digital School is in the top 10 best schools of the wolrd";
var regex = /[0-9]/g;

console.log(text.match(regex))

var text = "My school is the best school in the world";
var regex = /(top|best|school)/g;

console.log(text.match(regex))

var text = "100 percent";
var regex = /\d/g;

console.log(text.match(regex))

var text = "Digital School is in the top 10 best schools of the wolrd";
var regex = /\s/g;

console.log(text.match(regex))

var text= "Heeey, how are you??";
var regex = /e+/g

console.log(text.match(regex))

var text = "so, i hope we'll see each other again soon"
var regex = /so*/g;

console.log(text.match(regex))

var text = "hello, helloo, hellooo, heloooo, hellooooo, helloooooo!!!"
var regex = /o{3,5}/g

console.log(text.match(regex))

var text = "bestfriend, boyfriend, girlfriend"
var regex = /end$/g

console.log(text.match(regex))

var text = "category"
var regex = /cat/g

console.log(text.match(regex))

