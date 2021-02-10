"use strict";

var allEFs = document.querySelectorAll("[data-validate*=\"email\"]");
allEFs.forEach(function (element) {
  var someVariableName = new EmailValidator(element, element.dataset);
});
var allNameFields = document.querySelectorAll("[data-validate=\"full-name\"]");
allNameFields.forEach(function (element) {
  new FullNameValidator(element, element.dataset);
});
var allPhoneFields = document.querySelectorAll("[data-valdiate=\"phone-number\"]");
allPhoneFields.forEach(function (element) {
  new PhoneNumberValidator(element, element.dataset);
}); // class AnimalClass {
//     constructor(animalType) {
//         console.log(`AnimalClass(${animalType})`)
//         this.animalType = animalType
//     }
//     speak() {
//         console.log(`The ${this.animalType} Speaks...`)
//     }
// }
// class DogClass extends AnimalClass {
//     constructor(type) {
//         super(`dog-${type}`) 
//         console.log(`DogClass(${type})`)
//         this.type = type
//     }
//     speak() {
//         this.bark()
//     }
//     bark() {
//         console.log(`The ${this.type} Barks...`)
//     }
// }
// class CatClass extends AnimalClass {
//     constructor() {
//         super()
//         console.log(`CatClass()`)
//     }
//     meow() {
//         console.log(`The cat Meows...`)
//     }
// }
// var a = new AnimalClass()
// var pug = new DogClass(`pug`)
// var hound = new DogClass(`hound`)
//# sourceMappingURL=main.js.map
