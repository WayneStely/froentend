// Name : Lamansiang, Wayne Stely

let people = ["Greg", "Mary", "Devon", "James"];

// Number : 1
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// Number :  2
// people.forEach(function(person) { //2
//     console.log(person);
//   });

// Number : 3
// people.splice(0, 1);
// console.log(people);

// Number :  4
// people.pop();
// console.log(people);

// Number :  5
// people.unshift("Matt");
// console.log(people);

// Number :  6
// people.push("Wayne");
// console.log(people);

// Numbe : 7
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] === "Mary") {
//       break;
//     }
//   }

// Number :  8
// let copyArray = people.slice(2);
// console.log(copyArray);

// Number :  9
// people.splice(2, 1, "Elizabeth", "Artie");
// console.log(people);

// Number :  10
// let withBob = people.concat("Bob");
// console.log(withBob);

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// 1.
programming.languages.push("Go");
console.log(programming.languages);

//   2.
programming["difficulty"] = 5;
console.log(programming.difficulty);

//    3.
delete programming.jokes;
console.log(programming);

// 4.
programming.isFun = true;
console.log(programming);

// 5.
let updatedLanguages = programming.languages.map(function(language, index) {
    return index + " - " + language;
});

console.log(updatedLanguages);