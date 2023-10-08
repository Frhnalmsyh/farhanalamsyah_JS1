//Contoh If, Else, Nested IF//
//if//

if (true) {
    console.log('hai semuanya');
  }


//if else//
const hasil= 90
  if (hasil==100) {
    console.log('Selamat anda lulus');
  } else {
    console.log('Maaf anda tidak lulus');
  }

//if, elseif, else// 
const nilai =90;

if (nilai <= 100 && nilai >= 80) {
  console.log('Grade: A');
} else if (nilai < 80 && nilai >= 60) {
  console.log('Grade: B');
} else if (nilai < 60 && nilai >= 40) {
  console.log('Grade: C');
} else if (nilai < 40 && nilai >= 20) {
  console.log('Grade: D');
} else if (nilai < 20 && nilai >= 0) {
  console.log('Grade: E');
} else {
  console.log('Nilai tidak valid');
}

//Contoh Switch Case//
const buah="semangka";

switch(buah){
    case 'jeruk':
        console.log("ini buah "+buah)
        break;
    case 'apel':
        console.log("ini buah "+buah)
        break;
    case 'anggur':
        console.log("ini buah "+buah)
        break;
    default :
        console.log("maaf buah tidak ditemukan");
        break;
}

//Contoh For//
for (let angka= 0; angka < 5;angka++){
    console.log("Mari belajar berhitung "+ angka)
}


//Contoh While, do while//
//while//
let Nilai=1;
while(Nilai<=10){
    console.log("Ini adalah angka "+ Nilai)
Nilai++;
}

//do while//
let angka = 6
do{
   console.log('angka nya adalah '+angka);
   angka++ 
}while(angka < 10)


//Contoh Function//
function nama(){
    console.log("Perkenalkan nama saya adalah Farhan Alamsyah");

}
nama();