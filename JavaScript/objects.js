// Tworzenie obiektów
// let person = {
//   name: "Mateusz",
//   test: 'test',
//   date: 30
// }

// let person2 = new Object();
// person2.name = "Jan";
// person2.test = 40;
// person2.city = null

// console.log(person);

// Właściwości obiektów
// let person = {
//   name: "Jan",
//   age: 30,
//   city: "Warsaw",
// 	showText: function() {
//     console.log("Lubię to miasto.");
//   },
//   "2023-03-30": "Czwartek"
// };

// 1 sposób
// console.log( person.name )
// console.log( person.age )
// console.log( person.city )
// console.log( person.showText() )
// console.log( person.2023-03-30 ) // to jest błąd

// 2 sposób
// console.log( person['name'] )
// console.log( person['age'] )
// console.log( person['city'] )
// console.log( person['showText'] )
// console.log( person['2023-03-30'] )

// for ( let key in person ) {
//   console.log( `${key} - ${person[key]}` );
//   // console.log( person[key] )
// }

// 1. Stwórz obiekt o nazwie "osoba" zawierający pola "imie", "nazwisko" i "wiek". Przypisz do nich odpowiednie wartości i wyświetl cały obiekt w konsoli.

// let person = {
//   imie: 'Jan',
//   nazwisko: 'Kowalski',
//   wiek: 50
// };

// console.log(person);

// 2. Stwórz funkcję, która przyjmuje obiekt jako argument i wyświetla jego pola w konsoli.
// let person = {
//   imie: 'Jan',
//   nazwisko: 'Kowalski',
//   wiek: 50
// };

// function displayObject( object ) {
//   for ( let key in object ) {
//     console.log( key, ' - ', object[key] )
//   }
// }

// displayObject( person );

// 3. Stwórz obiekt o nazwie "ksiazka" zawierający pola "tytul", "autor" i "iloscStron". Napisz funkcję, która zmienia ilość stron w tej książce na wartość podaną jako argument.
// let book = {
//   title: "W pustyni i w Puszczy",
//   author: "Henryk Sienkiewicz",
//   numberOfPages: 300
// };

// function updatePageNumbers( book, newNumber ) {
//   book.numberOfPages = newNumber;
//   // book['numberOfPages'] = newNumber;
// }

// updatePageNumbers( book, 400 )
// console.log(book.numberOfPages); // result should be 400

// 4. Stwórz obiekt o nazwie "samochod" zawierający pola "marka", "model" i "rokProdukcji". Napisz funkcję, która zwraca tekst opisujący ten samochód.

// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   yearOfProduction: 2015
// };

// function carDescription( car ) {
//   let result = 'The brand of the car is ' + car.brand + ', model: ' + car.model + ', year of production ' + car.yearOfProduction;
//   // let result2 = `The brand of the car is ${car.brand}, model: ${car.model}, year of production ${car.yearOfProduction}.`

//   return result;
// }

// console.log( carDescription( car ) );

// 5. Stwórz funkcję, która przyjmuje tablicę obiektów reprezentujących zamówienia w sklepie internetowym, a następnie zwraca sumę kwoty zamówień dla każdego klienta:
// const orders = [
//   { customer: 'Alice', amount: 100 },
//   { customer: 'Bob', amount: 50 },
//   { customer: 'Alice', amount: 200 },
//   { customer: 'Bob', amount: 75 },
//   { customer: 'Charlie', amount: 125 },
// ];

// function sumOrders( orders ) {
//   let result = {}

//   for ( let i = 0; i < orders.length; i++ ) {
//     let customer = orders[i].customer;
//     let amount = orders[i].amount;

//     if ( result[ customer ] ) {
//       result[ customer ] += amount
//     } else {
//       result[ customer ] = amount;
//     }
//   }

//   orders.forEach( function ( order ) {
//     let customer = order.customer;
//     let amount = order.amount;

//     if ( result[ customer ] ) {
//       result[ customer ] += amount
//     } else {
//       result[ customer ] = amount;
//     }
//   })

//   return result;
// }

// console.log( sumOrders( orders ) );


// 4. Napisz funkcję, która jako argument przyjmuje tablicę obiektów, gdzie każdy obiekt reprezentuje książkę i ma pola **`title`**, **`author`** i **`pages`**. Funkcja powinna zwrócić sumę wszystkich stron we wszystkich książkach.

// var books = [
// 	{ title: "Harry Potter", author: "J.K. Rowling", pages: 400 },
// 	{ title: "Lord of the Rings", author: "J.R.R. Tolkien", pages: 1000 },
// 	{ title: "The Hobbit", author: "J.R.R. Tolkien", pages: 300 },
// ];


// function totalPageCount(books){
  
//   let total=0
  
  // for(let i=0; i<books.length ; i++){
  // total+= books[i].pages
  // }
  
  // books.forEach( function (book){
  //   total += book.pages
  // })
  
  // for(let book of books){
  //   total+=book.pages
  // }
  // return total;
  // }
// console.log(totalPageCount(books)); // 1700