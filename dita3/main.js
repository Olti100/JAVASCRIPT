// function sum(){
//     alert("test");
// }

// sum()

function sum(number1, number2){

    return number1 + number2;
}

sum(10, 5);
console.log(sum(10, 5))
console.log(sum(10, 59))
console.log(sum(10, 30))
console.log(sum(10, 298))
console.log(sum(107, 5))
console.log(sum(10, 57))

function toCelcius(f){
    return (f - 32) * 5 / 9;

}
console.log(toCelcius(50))


// var arrowFunction = () => alert("Hello World");
var arrowFunction = name => alert(`HEllo ${name}`);

arrowFunction("FiLAN fISTEKU");

function dsFunction(){
    var localVar = "Digital School";
    alert(localVar)
}

// dsFunction()

function toSecond(m){
    return (m * 60)

}
console.log(toSecond(10))

function sip(h, w){
    return(h * w / 2)
}

console.log(sip(5, 4))

var car = {name: "Audi" , color: "red" , year: 2025, kilometres: 0}

console.log(car);

var car = {
    name: "Audi",
    color:"red",
    year:2025,
    kilometres: 0,

    startEngine : function(){
        console.log("Vroommmmmm!!!");
    }
}

console.log(car.name)
console.log(car.color)
console.log(car.year)
console.log(car.kilometres)
car.startEngine()

console.log(car['name'])
console.log(car['color'])
console.log(car['year'])
console.log(car['kilometres'])

delete car.name;
console.log(car)

// console.log(car);


