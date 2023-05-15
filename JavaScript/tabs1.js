console.clear();

let tab = [];
let tab1 = [1, 2, 3, 4, 5, 6, 7];
let tab2 = ["a", "b", "c"];

let q = "kurs";
let w = 20;
let e = "pies";

let tab3 = [q, w, e, "kot", 77];
console.log(tab3);

console.log(tab3[2]);

var tab4 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
console.log(tab4[0][0]);

let tab5 = ["a", "b", "c"];

for (let i = 0; i < tab5.length; i++) {
	console.log(tab5[i], "która jest w pętli", i);
}

let tab6 = ["a", 2, 3, "k", 5, 6, 7];

tab6.forEach(function (wartosc, index) {
	//wartość zawsze na pierwszym miejscu funkcji druga to index
	console.log(index, wartosc);
});
// ------------
let str = "";
//console.log(str) => ******

for (let i = 0; i < 6; i++) {
	console.log("wartość pierwsza loopa", i);

	for (let j = 0; j < 6; j++) {
		console.log("wartość j", j);
		str = str + "*";
	}
	str = str + "\n";
}
console.log(str);

// -- Wbudowane funkcje tablicowe
// 1. Length
// let tab = [ 'ABC', 'DEF', 'GHI' ];

// console.log(tab.length);
// console.log(tab.length - 1);

// for ( let i = 0; i < tab.length; i++ ) {
//   console.log( tab[i] )
// }

// 2. Dodawanie elementów - push
// let tab = [ 'ABC', 'DEF', 'GHI' ];

// tab.push( 'ZZZ' )
// console.log(tab);

// tab[0] = 'AAA'
// console.log(tab);

// tab[4] = 'YYY';
// console.log(tab);

// tab.push('XXX', 0);
// console.log(tab);

// 3. Sprawdzanie czy jest tablicą
// let tab = [ 'ABC', 'DEF', 'GHI' ];
// let obj = {
//   name: 'Mateusz'
// }

// console.log( Array.isArray(tab) )
// console.log( typeof tab === typeof obj);

// 4. Metodę pop()
// let tab = [ 'ABC', 'DEF', 'GHI' ];

// tab.push( 'ZZZ' )
// console.log(tab);

// let lastElement = tab.pop()
// console.log(tab);
// console.log(lastElement);

// tab.push( lastElement )
// console.log(tab);

// 5. Metoda unshift();
// let tab = [ 'ABC', 'DEF', 'GHI' ];

// tab.unshift('ZZZ');
// console.log(tab);

// tab.unshift('XXX', 123);
// console.log(tab);

// 5. Metoda shift();
// let tab = [ 'ABC', 'DEF', 'GHI' ];

// let firstElement = tab.shift()
// console.log(tab);
// console.log(firstElement);

// 6. Metoda join()
// let tab = [ 'ABC', 'DEF', 'GHI' ];
// let tab2 = [ 123, 456, 789 ]
// console.log( tab.join() );

// // let i = tab.join();
// // console.log(i);

// console.log( tab2.join( '-' ) );

// 7. Metoda split();
// let str = 'Ala ma kota';
// let tab = str.split(' ');
// console.log(tab);

// 8. reverse();
// let tab = [ 1, 2, 3, 4 ];
// let tab = [ 'ABC', 'DEF', 'GHI' ];
// tab.reverse();

// console.log(tab);

// 9. indexOf() / lastIndexOf() / includes()
// let tab = [ 'ABC', 'DEF', 'GHI', 'ABC' ];

// console.log( tab.indexOf('GHI') );
// console.log( tab.indexOf('') );

// console.log( tab.lastIndexOf('ABC') );

// console.log( tab.includes( 'ABC' ) );

// 10. Concat - łączenie tablic
// let tab = [ 1, 2, 3, 4 ];
// let tab2 = [ 'ABC', 'DEF', 'GHI' ];
// let tab3 = tab.concat(tab2);
// tab2 = tab2.concat(tab2);

// console.log(tab3);
// console.log(tab2);

// 1. Stwórz funkcję, która zwróci indeks pierwszego wystąpienia podanej liczby w tablicy. Jeśli liczba nie występuje w tablicy, funkcja powinna zwrócić -1.

// function findIndex(arr, num){
//   // let indexOfElement = arr.indexOf(num)
//   // return indexOfElement;

//   return arr.indexOf(num)
// }
// let arr=[1,2,3,4]

// console.log(findIndex(arr, 3)); // Output: 2
// console.log(findIndex(arr, 6)); // Output: -1

// 2. Stwórz funkcję, która odwróci kolejność elementów w tablicy.
// function reverseArray(tab){
//   return tab.reverse()
// }
// let arr=[1,2,3,4]

// console.log(reverseArray(arr));

// 3. Stwórz funkcję, która doda podaną wartość na koniec tablicy i zwróci nową długość tablicy.

// function addToEnd(arr, val){
//   arr.push(val)
//   return arr.length
// }

// let arr=[1,2,3,4,5]

// console.log(addToEnd(arr, 7)); // Output: 6
// console.log(addToEnd(arr, 8)); // Output: 7
//  console.log(arr)

// 4. Stwórz funkcję, która usunie ostatni element z tablicy i zwróci go. Jeśli tablica jest pusta, funkcja powinna zwrócić null.

//  function removeLastElement( arr ) {
//   if ( arr.length === 0 ) {
//     return null;
//   } else {
//     // let poppedValue = arr.pop();
//     // return poppedValue;

//     return arr.pop();
//   }
// }

// let arr = [ 1, 2, 3, 4, 5 ];

// console.log( removeLastElement( arr ) );
// console.log( removeLastElement( [] ) ); // Output: null
// console.log( arr );

// forEach

// let tab = [1,2,3,4,5]
// let tab2=[]

// tab.forEach (function(element){
//              tab2.push(element * 7)
//              })

// console.log(tab2)

// ----

// 1. Napisz funkcję, która przyjmuje jako argument tablicę liczb i zwraca tablicę zawierającą kwadraty tych liczb (for):
// function numberSquares( arr ) {
//   let squared = [];
  
  // for ( let i = 0; i < arr.length; i++ ) {
  //   squared.push( arr[i] * arr[i] )
  // }
  
  // arr.forEach( function(number){
  //   squared.push(number * number)
  // })
  
//   return squared;
// }

// let a = [1, 2, 3]
// console.log( numberSquares( a ) ); // powinno zwrócić [ 1, 4, 9 ]
 

// 2. Napisz funkcję, która przyjmuje jako argument tablicę liczb i zwraca ich sumę (forEach):

// function sumNumbers( array ) {
//   let sum = 0;
  
//   array.forEach( function( element ) {
//     sum = sum + element;
//     // sum += element;
//   } )
  
//   // for (let i = 0; i < array.length; i++ ){
//   //   sum += array[i];
//   // }
  
//   // for ( let element of array ){
//   //   sum += element;
//   // }
  
//   return sum;
// }

 
// console.log( sumNumbers( [ 1, 2, 3 ] ) ); // should output 6
 
 
// 3. Napisz pętlę która obliczy średnią długość nazwisk w tablicy (forEach)
// let names = ['Kowalski', 'Nowak', 'Zawadzki', 'Kaczmarek', 'Szymański'];
// let sum = 0;

// // names.forEach( function( name ) {
// //   sum += name.length
// // })

// // for ( let i = 0; i < names.length; i++ ) {
// //   sum += names[i].length
// // }

// for ( let name of names ) {
//   sum += name.length
// }

// let avgLength = sum / names.length;

// console.log('Średnia długość nazwisk:', avgLength);
 
 
// 4. Napisz funkcję, która przyjmuje jako argument tablicę liczb i zwraca tablicę zawierającą tylko parzyste liczby (for…of):

// function evenNumbers( array ) {
//   let even = [];
  
//   // for ( let number of array ) {
//   //   if ( number % 2 === 0 ) {
//   //     even.push( number );
//   //   }
//   // }
  
//   // array.forEach( function ( number ) {
//   //   if ( number % 2 === 0 ) {
//   //     even.push( number );
//   //   }
//   // })
  
//   for ( let i = 0; i < array.length; i++ ) {
//     if ( array[i] % 2 === 0 ) {
//       even.push( array[i] )
//     }
//   }
  
//   return even;
// }

// console.log( evenNumbers( [ 1, 2, 3, 4, 5, 6, 8, 9, 20 ] ) );  // should output [ 2, 4, 6 ]