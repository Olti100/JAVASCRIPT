// // console.log("test")

// var programmingLanguages = ["JavaScript", "Php", "Python"];

// console.log(programmingLanguages)
// console.log(programmingLanguages[0])
// console.log(programmingLanguages[1])
// console.log(programmingLanguages[2])

// programmingLanguages.push("Java");

// console.log(programmingLanguages);

// programmingLanguages.pop();

// console.log(programmingLanguages);

// programmingLanguages.unshift("C#");

// console.log(programmingLanguages);

// programmingLanguages.shift();

// console.log(programmingLanguages);

// programmingLanguages.splice(0, 2, "Ruby");

// console.log(programmingLanguages);

// console.log(Math.random() * 5);
// console.log(Math.floor(Math.random()*5));




// var students = ["Filani", "Filanja"];
// var [s1, s2] = students;

// console.log(s1);
// console.log(s2);
// console.log(students);

// var places = ["London", "Paris", "New york", "Berlin"];
// var [firstPlace, , secondPlace] = places;

// console.log(firstPlace);
// console.log(secondPlace);

// var numbers = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10];
// var [first, second, ...otherNumbers] = numbers;

// console.log(first);
// console.log(second);
// console.log(otherNumbers.toString());


// var x = 1;

// if(x > 2){
//     console.log("x value is greater than two");
// }else {
//     console.log("x value is less than two");
// }

// var input = document.getElementById("input_id")
// var button = document.getElementById("btn_id")
// var text = document.getElementById("text_id")

// button.onclick = function() {
//     text.innerHTML = input.value
// }

// var input = document.getElementById("input_1")
// var input = document.getElementById("input_2")
// var button = document.getElementById("cal")
// var ans = document.getElementById("ans")


// cal.onclick = function() {
//     ans.innerHTML = parseInt(input_1.value) + parseInt(input_2.value);
// }


var age = document.getElementById("age");
var check = document.getElementById("check");
var result = document.getElementById("result");

check.onclick = function() {
    if(parseInt(age.value > 10)) {
        result.innerHTML = "Input value is greater than 10"
    }else if(parseInt(age.value) == 10){
        result.innerHTML = "Input value is 10"
    }else {
        result.innerHTML = "Input value is lower than 10"
    }
        

}




