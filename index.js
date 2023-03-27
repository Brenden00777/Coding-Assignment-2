//1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

// Created an array called ages.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   

//const subtractFirstElementFromLast = (ages) => {
//return ages[7] - ages[0];

//}



//subtractFirstElementFromLast();
//1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).




//1c. Use a loop to iterate through the array and calculate the average age. 



//2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

// Made an array called names
let names =['Sam', 'Tim', 'Sally', 'Buck', 'Bob'];


//2a. Use a loop to iterate through the array and calculate the average number of letters per name.




//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 


//3.  How do you access the last element of any array?


//4.  How do you access the first element of any array?


//5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.



//6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 



//7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function trippleWord(word, n){
    console.log(word.repeat(n));
}

trippleWord('hi', 2);
//8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.

//this function takes first name and last name as a parameter then combines the names and stores them in the fullName variable
const returnFullName = (firstName, lastName) => { 
    let fullName = firstName + ' ' + lastName;
    console.log(fullName);
    return fullName;

}

returnFullName('Tom', 'Sawyer');
// 9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let arrayOfNumbers = [ 43, 21, 16, 34, 41]

function sumOfAllTheNumbers(arrayOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log(sum);
        return sum;
        
    }
}

sumOfAllTheNumbers(43, 21, 16, 34, 41);
//10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.

let secondArrayOfNumbers =[32, 54, 84, 48]
function averageOfArray (_arr) {
    let total = 0; 
    let count = 0;
   
}

averageOfArray(32, 54, 84, 48);
//11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.



//12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

//this function 
function willBuyDrink (isHotOutside, moneyInPocket) {
    if (moneyInPocket >= 10.50 && isHotOutside == true ){
        console.log(true);
        return true;
        
    }

}

willBuyDrink(true, 11);

//13. Create a function of your own that solves a problem. 