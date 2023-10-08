//program javascript if
var int = 3;
if(int < 7){
    alert(int + ' Adalah kurang dari 7')
}

//program javascript else
var angka = 5;
if(angka % 2 == 0){
    alert(angka + ' adalah bilangan Genap');
} else {
    alert(angka + ' adalah bilangan Ganjil');
}

// // program javascript nested if
let bilangan = parseFloat(prompt("Masukkan suatu bilangan: "));

if (bilangan > 0) {
    console.log("Bilangan adalah positif");
} else if (bilangan === 0) {
    console.log("Bilangan adalah nol");
} else {
    console.log("Bilangan adalah negatif");
}

// program javascript switch case
let motor = prompt("Masukkan Nama Motor (beat, vario, ninja):").toLowerCase();

switch (motor) {
    case "beat":
        console.log("motor beat di pilih.");
        break;
    case "vario":
        console.log("motor vario di pilih.");
        break;
    case "ninja":
        console.log("motor ninja di pilih.");
        break;
    default:
        console.log("Pilihan tidak valid.");
}

// program javascript For Statement
let sepatu = ["Nike", "Adidas", "Jordan", "Reebok"];

for (let i = 0; i < sepatu.length; i++) {
    console.log(sepatu[i]);
}

// program javascript while
let jumlahMotor = 8;
let nomorMotor = 1;
while (nomorMotor <= jumlahMotor){
    console.log("Motor " + nomorMotor + " Sedang di luar kota");
    nomorMotor++;

}

// program java do while
let ukuran = ["Small", "Medium", "Large", "Extra Large"];
let i = 0;

do {
    console.log(ukuran[i]);
    i++;
} while (i < ukuran.length);


// program java function
function hitungLuasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
}

let alas = 8;
let tinggi = 5;
let luas = hitungLuasSegitiga(alas, tinggi);
console.log(`Luas segitiga dengan alas ${alas} dan tinggi ${tinggi} adalah ${luas}`);

