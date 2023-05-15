// 1. Znajdź najmniejszą i największą wartość w tablicy:
// let arr = [3, 7, 1, 9, 4, 6];
// let min = arr[0];
// let max = arr[0];

// for ( let i = 0; i < arr.length; i++ ) {
//   if ( arr[i] < min ) {
//     min = arr[i]
//     console.log(min);
//   }
//   if ( arr[i] > max ) {
//     max = arr[i];
//   }
// }

// arr.forEach( function (number) {
//   if ( number < min ) {
//     min = number;
//   }
//   if ( number > max ) {
//     max = number;
//   }
// })

// for( let number of arr ) {
//   if ( number < min ) {
//     min = number;
//   }
//   if ( number > max ) {
//     max = number;
//   }
// }

// Wykorzystanie Math.min i Math.max
// let min = Math.min.apply(null, arr);
// let max = Math.max.apply(null, arr);

// console.log( `Min: ${min}, Max: ${max}` ); // Min: 1, Max: 9

// 2. Znajdź elementy w tablicy, które są większe od średniej wartości:
// let arr = [5, 7, 2, 9, 1, 6];
// let sum = 0;

// for ( let i = 0; i < arr.length; i++ ) {
//   sum += arr[i];
// }

// let avg = sum / arr.length;
// let result = [];

// arr.forEach( function( number ) {
//   if ( number > avg ) {
//     result.push( number );
//   }
// })

// console.log(result);

// 3. Znajdź unikalne elementy w tablicy:
// let arr = [ 1, 2, 3, 2, 4, 3, 5 ];
// let unique = [];

// arr.forEach( function( number ) {
//   // console.log( 'current number is ', number)
//   if ( !unique.includes( number ) ) {
//     unique.push( number )
//     // console.log(unique);
//   }
// })

// console.log(unique); // [1, 2, 3, 4, 5]

// 5. Posortuj elementy w tablicy od największej do najmniejszej wartości:
// const arr = [ 5, 2, 7, 1, 8, 3 ];
// const arr2 = [ 5, 2, 7, 1, 8, 3 ];

// // Od najmniejszej do największej
// arr.sort( function(a, b) {
//  return a - b;
// })

// // Od najwiekszej do najmniejszej
// arr2.sort( function(a, b) {
//  return b - a;
// })

// console.log(arr);
// console.log(arr2);

// 7. Napisz funkcję, która jako argument przyjmuje tablicę napisów i zwraca najdłuższy napis z tej tablicy.

// function longestString( stringsTab ) {
//   let longest = '';

// for ( let i = 0; i < stringsTab.length; i++ ) {
//   if ( stringsTab[i].length > longest.length ) {
//     longest = stringsTab[i];
//   }
// }

// stringsTab.forEach( function ( str ) {
//   if ( str.length > longest.length ) {
//     longest = str;
//   }
// } );

//   for ( let str of stringsTab ) {
//     if ( str.length > longest.length ) {
//       longest = str;
//     }
//   }

//   return longest;
// }

// console.log( longestString( [ 'apple', 'banana', 'orange', 'kiwi' ] ) ); // 'banana'
