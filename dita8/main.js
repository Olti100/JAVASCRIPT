// var letters = ["a", "b", "c", "d", "e",];

// console.log(letters);
// console.log(letters[0]);
// console.log(letters[1]);
// console.log(letters[2]);
// console.log(letters[3]);
// console.log(letters[4]);

// for (var i = 0; i < letters.length; i++) {
//     console.log(i)
// }

// var person = {firstName: "John", lastName: "Doe", age: 25};

// var x;
// console.log(person["firstName"])
// console.log(person["lastName"])
// console.log(person["age"])

// for(x in person){
//     console.log(person[x])
// }


// var names = ["Rinis", "Aurela", "Erblina", "Jora"];
// var x;

// for(x of names){
//     document.write(x + "<br>")
// }


// var txt = "JavaScript";
// var x;

// for(x of txt){
//     document.write(x + "<br>")
// }

// var i = 0;

// do{
//     console.log(i)
//     i+=1;   

// }while(i < 5)

// i=0;

// while(i < 5){
//     console.log(i)
//     i++;
// }


var input = document.getElementById("txt")
var btn1 = document.getElementById("add")
var btn2 = document.getElementById("show")

var words = [];

btn1.onclick = function(){
    words.push(input.value);
    input.value = "";
    console.log(words)
}

var x;
btn2.onclick = function () {
    for (x of words) {
        document.write(x + "<br>")
    }
}



