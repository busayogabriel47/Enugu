
// // // console.log("This is my first Javascript code")

// // // console.log("Javascript " + "rocks!")

// // // //Variable



// // // const fruit = "Apple"


// // //Mathematical Assignment operators

// // let x = 10 + 20
// // console.log(x)

// // let m = 15
// //  m*= 10
// // console.log(m)

// // /* Muiltiline comment*/

// // //Single line comment



// // //Primitive datatypes

// // // //String

// // // "This is another string"


// // // //Number

// // // 50
// // // 10
// // // 200

// // // //Boolean

// // // True  
// // // false

// // // //undefined
// // // undefined

// // // //null
// // // null

// // // //Non-primitive datatypes

// // // //Object
// // // //Array



// // //Increment and Decrement operator

// // let i = 2;

// // i = i + 10

// // console.log(i)


// // let y = 10;

// // y = y - 5;



// // console.log(y)

// // const candidate = "Ada"

// // const thankYou = "Hello " + candidate + " thanks for coming to this occasion";

// // console.log(thankYou);


// // let person = {
// //     name: "Chukwuma",
// //     age: 26,
// //     address: "40 williams street",
// //     friends: ["peter", "aneke"]
// // }

// // // person[name] = "Chukwuma"

// // // console.log(person)


// // const message = `Hello ${person.name} of ${person.address} You have been to participate in the next coding challenge`

// // console.log(message)


// // console.log(person.name)

// // const arr = ['Orange', 'Pineapple', 'Water', "Cucuba", "Mango", "apple", [[1, 2, 3, 4]]];

// // arr[0] = "Grapes"
// // arr[6] = ["Cherries", "Kiwis"]

// // console.log(arr)

// const calculateArea = function(width, height){
//     const result = width * height;
//     return result;
// }

// function victor(){
//     return
// }

// const juliet = name => {
//     return
// }

// console.log(calculateArea(3, 4))
// console.log(calculateArea(5, 8))
// console.log(calculateArea(10, 5))


//for loop

// for(let d = 0; d <= 15; d += 3){
//     console.log(d)
// }

// for(let i = 1; i<10; i += 2){
//     if(i === 9){
//        break;
//     }
//     console.log('Total: ' + i);
//  }

//while loop

// let i = 0;

// while( i < 10){

// i += 4

// console.log(i);
// }

//Do...while loop

// let i = 0;

// do{
//     alert(i);
//     i++;
// // }while(i < 5)


// const capitals = {
//     a: "London",
//     b: "Abuja",
//     c: "Lagos"
//  }
 
//  for(let value in capitals){
//     console.log(`${value} : ${capitals[value]}`);
//  }


//Pseudo code

/*Palindrome is a word or sentence thats spelled the 
same way both forward and backword ignoring punctuation, 
case, and spacing*/

//The Challenge
//Get the strings or numbers from the user
//Take a temporary variable that holds the numbers.
//3. Reverse the given number. 
//4 Compare the original number with the reversed number if the 
//temporary and original number are same 


//1. create an empty array
const letter = []; 

//2. Create a variable with a palindrome as a value
const palindrome = "civic";

//3. Create and empty variable for a reverse word
let rword = "";

//4. Put letters of word into stack with for loop
for(let i = 0; i< palindrome.length; i++){
   letter.push(palindrome[i])
}

//5. Pop off the stack in reverse order
for(let i = 0; i < palindrome.length; i++){
   rword += letter.pop()
}

/*6. Log palindrome is a palindrom to console
if rword is eqaul to palindrome, otherwise 
log palindrome is not a palindrome */

if(rword === palindrome){
   console.log(palindrome + " is a palindrome")
}else{
   console.log(`${palindrome} is not a palindrome`)
}





