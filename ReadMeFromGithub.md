README
logo_ironhack_blue 7

LAB | JS Presidents
giphy

Learning Goals
Introduction
Now that we've covered JavaScript array methods let's put them to use! In this lab, we'll explore a dataset of US presidents with information about their terms in office. We'll use the array methods map(), filter, reduce(), and sort() to iterate over the array and format, filter, and sort the data.

Requirements
Fork this repo.
Clone this repo.

Submission
Upon completion, run the following commands:
git add .
git commit -m "Solved lab"
git push origin master
Create a Pull Request and submit your assignment

Test Your Code
This LAB is equipped with unit tests to provide automated feedback on your lab progress. If you want to check the tests, they are in the tests/presidents.spec.js file.

To run the tests and your JavaScript code, open the SpecRunner.html file using the Live Server VSCode extension.

To see the outputs of the console.log in your JavaScript code, open the Console in the Developer Tools.

Instructions
You will work in the src/presidents.js file. The file already includes the array of presidents and the function definitions. You will need to implement the functions following the requirements in each iteration and make the tests pass.

The presidents array contains an object for each president with the following properties:

{
id: 44,
name: "Barack Obama",
birthYear: 1961,
deathYear: null,
tookOffice: 2009,
leftOffice: 2017,
party: "Democratic",
}

It is possible for certain properties, such as party and leftOffice, to have a value of null. For instance, if a president was not affiliated with any political party, the party property would be null. Similarly, if a president is still in office, the leftOffice property would be null.

Array Methods
In case you need a refresher on any of the array methods, you can check the FAQs section at the end of the README, where you will find the explanations and examples of using the array methods map(), filter(), reduce(), and sort().

Iteration 1: Names of All Presidents - map()
We will start our practice of JS array methods by working with the map() method.

The map() method creates a new array populated with the results returned from the provided callback function for every element in the array. The callback function should return a value to be included in the new array.

Implement the function getNames() that takes the presidents array as an argument. The function should return a new array of strings containing only the names of presidents.

You must use the map() method in your implementation to create the new array.

Example:

console.log( getNames(presidents) );
Expected Output:

[
"George Washington",
"John Adams",
"Thomas Jefferson",
// ...
// ...
];
Make sure to check the test output to verify that the function is working correctly.

Iteration 2: Democratic Presidents - filter()
Next up, we will practice using the filter() method. The filter() method creates a new array containing the elements for which the callback function returns true. In other words, the filter() method creates a new array containing only the elements that pass the test implemented by the callback function.

Implement the function getDemocraticPresidents() that takes the presidents array as an argument. The function should use the filter() method to create a new filtered array containing only the presidents who belonged to the Democratic party. The function should then return the new filtered array.

The presidents who belonged to the Democratic party have the party property set to "Democratic".

Example:

console.log( getDemocraticPresidents(presidents) );
Expected Output:

[
{ id: 7, name: "Andrew Jackson", /* ... */ party: "Democratic" },
{ id: 8, name: "Martin Van Buren", /* ... */ party: "Democratic" },
{ id: 11, name: "James K. Polk", /* ... */ party: "Democratic" },
// ...
// ...
];

Iteration 3: Count Years in Office - reduce()
Next on our practice menu is the reduce() method.

The reduce() method executes a reducer function (callback) for each value of an array. During each iteration, the reducer function receives the accumulated value and returns a new value to be used as the accumulated value for the next iteration. The reduce() method returns a single value, which is the final accumulated result.

Implement the function countYearsInOffice() that takes the presidents array as an argument. The function should use the reduce() method to count the total years that all the presidents served in office (leftOffice - tookOffice). The function should then return a number representing the total years.

Important: You should skip the president who is still in office (the president with the leftOffice property set to null) and not include them in the total years.

Example:

console.log( countYearsInOffice(presidents) );
Expected Output:

232

Iteration 4: Sort Presidents by Birth Year - sort()
For the final few mandatory iterations, we will practice using the sort() method.

The sort() method is used to sort the elements of an array in place. This means the original array is mutated, and the sorted elements are rearranged within the same array. To sort an array, we need to pass a compare function to the sort() method with the conditional logic that returns -1, 1, or 0 and specifies how to sort the elements.

Implement the function sortPresidentsByBirthYear() that takes the presidents array as an argument. The function should use the sort() method to sort the presidents array by birth year, from oldest to youngest. The function should then return the sorted array of presidents.

Example:

console.log( sortPresidentsByBirthYear(presidents) );
Expected Output:

[
{ id: 1, name: "George Washington", /* ... */ birthYear: 1732 },
{ id: 2, name: "John Quincy Adams", /* ... */ birthYear: 1767 },
{ id: 3, name: "Thomas Jefferson", /* ... */ birthYear: 1743 },
// ...
// ...
];

Bonus Iterations
You are doing great! Let's move on to the bonus iterations. 🚀

Before you start working on the bonus iterations, you will need to enable the tests for the bonus iterations. You may have noticed that the test results for the bonus iterations are gray. This is because we disabled them intentionally to avoid overwhelming you with too many tests.

The tests are located in the file tests/bonus.specs.js. To enable the tests, remove the x from the first xdescribe() block, like this:

Before:

xdescribe("BONUS", () => {
// ...
After:

describe("BONUS", () => {
// ...

Bonus: Iteration 5 | Age at Inauguration - map()
Implement the function getAgeAtInauguration() that takes the presidents array as an argument. The function should use the map() method to create a new array of updated president objects, with a new property ageAtInauguration containing the age of each president when they took office. The function should then return the new array containing the updated president objects, where each object contains the new property ageAtInauguration.

Example:

console.log( getAgeAtInauguration(presidents) );
Expected Output:

[
{ id: 1, name: "George Washington", /* ... */ ageAtInauguration: 57 },
{ id: 2, name: "John Quincy Adams", /* ... */ ageAtInauguration: 62 },
{ id: 3, name: "Thomas Jefferson", /* ... */ ageAtInauguration: 58 },
// ...
// ...
];

Bonus: Iteration 6 | Presidents Born After - filter()
Implement the function getPresidentsBornAfter() that takes two arguments: the presidents array and a year. The function should use the filter() method to create a new array containing only the presidents who were born after the year provided as an argument. The function should then return the new filtered array containing only the presidents who were born after the specified year.

Example:

console.log( getPresidentsBornAfter(presidents, 1945) );
Expected Output:

[
{ id: 42, name: "Bill Clinton", /* ... */ birthYear: 1946 },
{ id: 43, name: "George W. Bush", /* ... */ birthYear: 1946 },
{ id: 44, name: "Barack Obama", /* ... */ birthYear: 1961 },
{ id: 45, name: "Donald Trump", /* ... */ birthYear: 1946 },
];

Iteration 7: Count Republican Presidents - reduce()
Implement the function countRepublicanPresidents() that takes the presidents array as an argument. The function should use the reduce() method to count the total number of presidents who belonged to the Republican party. The function should then return a number representing the number of Republican presidents.

The presidents who belonged to the Republican party have the party property set to "Republican".

Example:

console.log( countRepublicanPresidents(presidents) );
Expected Output:

19

Bonus: Iteration 8 | Sort Presidents by Name - sort()
Implement the function sortPresidentsByName() that takes the presidents array as an argument. The function should use the sort() method to sort the presidents array alphabetically by name, in ascending order. The function should then return the sorted array of presidents.

Example:

console.log( sortPresidentsByName(presidents) );
Expected Output:

[
{ id: 16, name: "Abraham Lincoln", /* ... */ },
{ id: 7, name: "Andrew Jackson", /* ... */ },
{ id: 17, name: "Andrew Johnson", /* ... */ },
{ id: 44, name: "Barack Obama", /* ... */ },
{ id: 23, name: "Benjamin Harrison", /* ... */ },
{ id: 42, name: "Bill Clinton", /* ... */ },
{ id: 30, name: "Calvin Coolidge", /* ... */ },
// ...
// ...
];

Happy coding! 💙

FAQs

I am stuck in the exercise and don't know how to solve the problem or where to start.
All of the Jasmine tests are failing and in red. Why did this happen?
How to use the map() array method?
How to use the filter() array method?
How to use the sort() array method?
How to use the reduce() array method?
How to use the slice() array method?
I am unable to push changes to the repository. What should I do?
