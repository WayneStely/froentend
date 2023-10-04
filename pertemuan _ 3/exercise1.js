function cariNilaiTerbesar(arr) {
    let terbesar = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > terbesar) {
            terbesar = arr[i];
        }
    }

    return terbesar;
}

let angka =[30, 79, 40, 80, 100];
let hasil = cariNilaiTerbesar(angka);
console.log("Angka terbesar adalah: " + hasil);