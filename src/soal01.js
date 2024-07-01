const prompt = require('prompt-sync')({sigint: true});

// Input number pada promt
const numb = prompt('Input number : ');

// mengubah inputan ke dalam format number
var number = Number(numb);

// cek apakah angka yang di input merupakan bilangan negatif atau tidak
if(number < 0){
    console.log("Tidak bisa input bilangan negatif");
}else{
    
    // cek apakah angka yang di input merupakan bilangan ganjil atau tidak
    if(number % 2 != 0){
        console.log('Tidak bisa input bilangan ganjil');
    }else{
        // Hitung akar dua dari angka yang diinput
        var result = Math.sqrt(number);
        
        // cetak hasil akar dua dari angka yang diinput
        console.log(`Hasil akar dua dari ${number} adalah : ${result}`);
    }
}