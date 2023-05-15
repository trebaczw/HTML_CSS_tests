console.clear();

let a = 2;
let b = 5;
function suma(a, b) {
	//   let result =a+b
	//   return result

	return a + b;
}
console.log(suma(10, 21));

// ----------------

function capitalizeLetters(str) {
	let result = str.toUpperCase();
	return result;
}

console.log(capitalizeLetters("sample text"));

// --------------------------

let c = 6;
let d = 5;

if (c > d) {
	console.log("a>b");
} else {
	console.log("a<b");
}

// --------------------------

// pętla od 0 do 100
for (let i = 100; i >= 0; i--) {
	console.log(i);
}

// let arr=[1, 2, 3, 4, 5]

for (let i = 0; i < arr.lenght; i++) {
	suma + i;
}
console.log("suma");

// 1. Wypisz w konsoli liczby od 1 do 10

for (i = 1; i <= 10; i++) {
	console.log(i);
}

// 2. Wypisz w konsoli wszystkie liczby nieparzyste od 10 do 20

for (i = 1; i <= 20; i++) {
	if (i % 2 == 1) {
		console.log(i);
	}
}

// 3. Wypisz w konsoli wszystkie liczby od 20 do 1 w odwrotnej kolejności

for (i = 20; i >= 0; i--) {
	console.log(i);
}

// 4. Zsumuj liczby od 1 do 100, ale pomijając liczby podzielne przez 3
let sum = 0;
for (i = 1; i <= 100; i++) {
	if (i % 3 !== 0) {
		console.log(sum + i);
	} else {
		console.log("nic");
	}
}

// 3367

// 5. Napisz funkcję, która przyjmuje jako argument tekst i zwraca ten sam tekst, ale z odwróconym kolejnością liter:
let text = "Ala ma kota";
function reverseText(text) {
	let reversed = "";

	for (let i = text.length - 1; i >= 0; i--) {
		reversed = reversed + text[i];
	}

	return reversed;
}

console.log(reverseText(text));

// ---------
var m = 4;

for (var i = 0; i < 10; i++) {
	if (i == m) {
		//wychodzi z pętli
		break;
	}
	console.log(i);
}

let j = 0;

console.log("end of for loop");

while (j < 10) {
	if (j == m) {
		break;
	}
	console.log(j);
	j++;
}

console.log("end of for while");

let x = 0;
do {
	console.log(x);
	x++;
	if (x == m) {
		break;
	}
} while (x < 10);

// --------------
function inputSum( ){
	let num
	let sum=0
	
	do{
	  num = prompt('podaj liczbę:')
	  if(num>0){
		sum = sum + parseInt(num)
		console.log(sum)
	  }
	  
	}while(num !== '0')
	
	return sum
  }
  console.log('Suma dodatnich liczb wynosi', inputSum() );

//   -----
// 7. Napisz program, który wyświetla tabliczkę mnożenia dla liczb od 1 do 10 przy użyciu pętli for.

for(i=0; i<=10; i++){
  
	console.log('mnożenie',i)
	
	for(j=1; j<=10; j++){
	  console.log(i,'x',j,'=',i*j)
	}
  }