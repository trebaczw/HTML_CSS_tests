
// 1. Dodawanie właściwości do obiektów, usuwanie przy pomocy operatora 'delete'
// const car = {
//   make: 'Honda',
//   model: 'Civic',
//   year: 2019,
// };

// car.color = 'blue';
// car['color'] = 'blue';
// console.log(car);

// car.brum = function() {
//   console.log('brum brum')
// }
// car['brum'] = function() {
//   console.log('brum brum')
// }
// console.log(car);
// console.log(car.brum())

// delete car.brum;
// console.log(car);


// 2. Kopiowanie obiektów Object.assign();
// let a = {
//     name : "kot",
//     age: 7,
//     speed: 10
// }

// let b = {
//     name : "pies",
//     age : 5
// }
// let targetObj = { a: 1, b: 2 };

// let c = Object.assign({}, b, a, targetObj) // ilośc obiektów przekazanych dowolna 
// console.log(c);



// let targetObj = { a: 1, b: 2 };
// let sourceObj = { b: 3, c: 4 };

// Object.assign( targetObj, sourceObj )
// console.log(targetObj)


// 3. Kopiowanie obiektów Object.fromEntries();
// let arr = [
//   [ 'a', 3, 'test' ], // tylko 2 pierwsze wartości
//   [ 'b', 2 ],
//   [ 'c', 1 ],
//   [ 'd' ] // pominięte
// ]
// let obj = Object.fromEntries(arr);
// console.log(obj);


// Zadanie 1: Konwersja tablicy par klucz-wartość na obiekt
// Napisz funkcję, która konwertuje tablicę par klucz-wartość na obiekt za pomocą metody Object.fromEntries(). Funkcja powinna przyjmować jedną argument, który jest tablicą zawierającą pary klucz-wartość, np. [ ['name', 'John'], ['age', 30], ['gender', 'male'] ], a zwracać powinna obiekt zawierający te pary klucz-wartość.
 
// function convertArrayToObject( arr ) {
// //   let result = Object.fromEntries( arr );
  
// //   return result;
//   return Object.fromEntries( arr );
// }

// let arr = [ ['name', 'John'], ['age', 30], ['gender', 'male'] ];
// let obj = convertArrayToObject(arr);
// console.log( obj ); // { name: 'John', age: 30, gender: 'male' }
 

 
// Zadanie 2: Wykluczanie jednej lub kilku właściwości z obiektu
// Napisz funkcję, która wyklucza jedną lub kilka właściwości z obiektu za pomocą metody Object.fromEntries().
// Funkcja powinna przyjmować dwa argumenty: pierwszy argument to obiekt, a drugi argument to tablica nazw właściwości, które mają być wykluczone z obiektu. Funkcja powinna zwracać nowy obiekt zawierający wszystkie właściwości oryginalnego obiektu z wyjątkiem tych, które zostały wykluczone.
 
// function excludeProperties( obj, propsToExclude ) {
//   let entries = [];
  
//   for ( let key in obj ) {
//     console.log( propsToExclude, propsToExclude.includes(key), key )
//     if ( !propsToExclude.includes(key) ) {
//       entries.push( [key, obj[key] ] )
//     }
//   }
  
//   return Object.fromEntries( entries );
// }

// let person = {
//   name: "John",
//   age: 30,
//   city: "Warsaw",
//   gender: 'male'
// }
 
// let excludedProps = ['age', 'city'];
// let newPerson = excludeProperties(person, excludedProps);
// console.log(newPerson); // { name: 'John', gender: 'male' }
 
 
 
// Zadanie 3: Łączenie dwóch obiektów
// Napisz funkcję, która łączy dwa obiekty za pomocą metody Object.assign().Funkcja powinna przyjmować dwa argumenty - pierwszy argument to obiekt docelowy, do którego mają być dodane właściwości, a drugi argument to obiekt źródłowy, z którego mają być skopiowane właściwości. Funkcja powinna zwracać nowy obiekt, który jest połączeniem dwóch obiektów.
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };

// function mergeObjects( obj1, obj2 ) {
// //   let mergedObjects = Object.assign( obj1, obj2 );
  
// //   return mergedObjects
//   return Object.assign( obj1, obj2 );
// }

// console.log( mergeObjects( obj1, obj2 ) ); // { a: 1, b: 2, c: 3, d: 4 }

 
// Zadanie 4: Klonowanie obiektu
//Napisz funkcję, która klonuje obiekt za pomocą metody Object.assign(). Funkcja powinna przyjmować jeden argument - obiekt, który ma zostać sklonowany. Funkcja powinna zwracać nowy obiekt, który jest identyczny z oryginalnym.
 
// function cloneObject( obj ) {
//   return Object.assign( {}, obj )
// }
 
// let originalObject = { a: 1, b: 2 };
// let clonedObject = cloneObject( originalObject )

// console.log(clonedObject); // { a: 1, b: 2 }