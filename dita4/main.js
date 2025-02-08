// var pc = {
//     name: "Lenovo"
//     model: "i fundit";
//     GPU: "Nvidia;";
//     CPU: "Intel I7";
// }

// console.log(pc.name)

// var computer = new Object;

// computer.name = "Lenovo";
// computer.CPU = "Intel Core i7";
// computer.GPU = "GeForce";
// computer.RAM = "16GB";

// computer.type = function(){
//     return this.name + ", " + this.CPU + ", " + this.RAM + ", " + this.GPU
// }
// console.log(computer.type())
// console.log(computer.name)
// console.log(computer['name'])


// var kerri = {
//     emri: "Mercedes",
//     modeli: "CLS",
//     ngjyra: "E zez",
//     viti: 2025,
//     kilometrat: 0,
//     startEngine: function(){
//         console.log("Vrooomm!!");
//     },

//     get getKilometrat(){
//        return this.kilometrat; 
//     },

//     set setKilometrat(km){
//         this.kilometrat = km;
//     }
// }

// console.log(kerri.getKilometrat);

// kerri.setKilometrat = 1000;
// console.log(kerri.getKilometrat)

function Kerri(emri, modeli, ngjyra, viti, kilometrat){
    this.emri = emri;
    this.modeli = modeli;
    this.ngjyra = ngjyra;
    this.viti = viti;
    this.kilometrat = kilometrat;
}

var kerri1 = new Kerri("Mercedes", "CLS", "E zez", 2024, 0);
var kerri2 = new Kerri("Audi", "A8", "E zez", 2024, 0);
var kerri3 = new Kerri("Mercedes", "CLS", "E zez", 2024, 0);

console.log(kerri1);
console.log(kerri2);
console.log(kerri1);