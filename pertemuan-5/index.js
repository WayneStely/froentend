//Array sangat penting di jv, karna kalo kt ambe data array itu berpengaruh untuk konsepnya 
// array setiap elemen di indeks dan dimulai dari 0.
// untuk akses array datanya , kita pakai length 
let students = ["jooh", "bob", "peter"] //pakai [] ini karena di array pakai itu untuk menyimpan data
let numbers = [1, 2, 3, 4, 5]
let john = ["john", "doe", 35, true];

console.log(students);
console.log(numbers);
console.log(john);
console.log(john.length);
//array literall
// semua awalan dengan huruf besar adalah CLASS

//array index
console.log(students[1]);
students[1] = 'jane';
console.log(studnets);
//akses array paling terakhir contohnya data paling terakhir 
console.log(students[students.length - 1]);

//TO string mengubah array menjadi string 
console.log(john.toString());

// join 
console.log(john.join(" "));
console.log(john.join("#"));

//pop (mengeluarkan elemen terakhir dari sebuah array)
john.pop
console.john(john);

// push (menambah element di bagian akhir dari sebuah array)
john.push("good morng");
console.log(john);
// shift (mengeluarkan element pertama dari sebuah array)
john.shift();
console.log(john);
// unshift ( menambah element di bagian awal array)
john.unshift("hello");
console.log(john);
// splice (digunakan untuk menambah, menghapus dan mengganti element di sebuah array)
john.splice(3, 0, true);
console.log(john);
// slice ( digunakan untuk mengambil beberapa element pada array, dan menaruhnya pada array baru)
john.slice2 = john.slice

// object ada 2 hal PROPERTY& VALUE
//didalam object bisa ada array 
// di dalam object bisa ada address juga 
const john = {
        firstName: 'john',
        property
        lastName: "doe",
        age: 33,
        isMarried: true,
        grade: [90, 80, 100],
        address: {
            city: "manado",
            province: "sulawesi utara",
            postalCode: "8493", // di dalam address object di dalam object
        }
    },
    sayGreetings: function() {
        console.log("hello world");
    },