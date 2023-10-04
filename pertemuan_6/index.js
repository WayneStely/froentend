//String Literal
//------------------
// let fullName = "John Doe"
// let age = 33
// let addres = "manado"

// // Hello my name is john doe,my age 33 years old
// // and i live in manado

// let kalimat5 = "hello my name is " + fullName + ", my age" + age + " i live in manado " + address;

// let kalimat6 = `hello my name is ${fullName}, my age ${age}, tahun`

// console.log(kalimat6);
// console.log(kalimat5);

//Arrow function
//------------------
// function sayGreetings() {
//     return `hello world`;
// }

// const sayGreetings6 = () => {
//     return `Hello world`;
// }
// console.log(sayGreetings6());

//Implicit return value
//--------------
// const sayGreetings6 = (name) => `hello ${name}`;

// // pada IIFE 
// (() => {
//     console.log("hello");
// })();

// //pada callback
// const numbers = [1, 2, 3, 4, 5];
// let output = numbers.map((item) => item);
// console.log(output);

// Default parameter
//----------------

const sayGreetings5 = (fullName) => {
    console.log(`hello ${fullName}`);
}

sayGreetings5("wayne");