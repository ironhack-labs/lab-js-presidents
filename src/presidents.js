const presidents = [
  {
    id: 1,
    name: "George Washington",
    birthYear: 1732,
    deathYear: 1799,
    tookOffice: 1789,
    leftOffice: 1797,
    party: null, // No party - Unaffiliated
  },
  {
    id: 2,
    name: "John Quincy Adams",
    birthYear: 1735,
    deathYear: 1826,
    tookOffice: 1797,
    leftOffice: 1801,
    party: "Federalist",
  },
  {
    id: 3,
    name: "Thomas Jefferson",
    birthYear: 1743,
    deathYear: 1826,
    tookOffice: 1801,
    leftOffice: 1809,
    party: "Democratic-Republican",
  },
  {
    id: 4,
    name: "James Madison",
    birthYear: 1751,
    deathYear: 1836,
    tookOffice: 1809,
    leftOffice: 1817,
    party: "Democratic-Republican",
  },
  {
    id: 5,
    name: "James Monroe",
    birthYear: 1758,
    deathYear: 1831,
    tookOffice: 1817,
    leftOffice: 1825,
    party: "Democratic-Republican",
  },
  {
    id: 6,
    name: "John Quincy Adams",
    birthYear: 1767,
    deathYear: 1848,
    tookOffice: 1825,
    leftOffice: 1829,
    party: "Democratic-Republican",
  },
  {
    id: 7,
    name: "Andrew Jackson",
    birthYear: 1767,
    deathYear: 1845,
    tookOffice: 1829,
    leftOffice: 1837,
    party: "Democratic",
  },
  {
    id: 8,
    name: "Martin Van Buren",
    birthYear: 1782,
    deathYear: 1862,
    tookOffice: 1837,
    leftOffice: 1841,
    party: "Democratic",
  },
  {
    id: 9,
    name: "William Henry Harrison",
    birthYear: 1773,
    deathYear: 1841,
    tookOffice: 1841,
    leftOffice: 1841,
    party: "Whig",
  },
  {
    id: 10,
    name: "John Tyler",
    birthYear: 1790,
    deathYear: 1862,
    tookOffice: 1841,
    leftOffice: 1845,
    party: null,
  },
  {
    id: 11,
    name: "James K. Polk",
    birthYear: 1795,
    deathYear: 1849,
    tookOffice: 1845,
    leftOffice: 1849,
    party: "Democratic",
  },
  {
    id: 12,
    name: "Zachary Taylor",
    birthYear: 1784,
    deathYear: 1850,
    tookOffice: 1849,
    leftOffice: 1850,
    party: "Whig",
  },
  {
    id: 13,
    name: "Millard Fillmore",
    birthYear: 1800,
    deathYear: 1874,
    tookOffice: 1850,
    leftOffice: 1853,
    party: "Whig",
  },
  {
    id: 14,
    name: "Franklin Pierce",
    birthYear: 1804,
    deathYear: 1869,
    tookOffice: 1853,
    leftOffice: 1857,
    party: "Democratic",
  },
  {
    id: 15,
    name: "James Buchanan",
    birthYear: 1791,
    deathYear: 1868,
    tookOffice: 1857,
    leftOffice: 1861,
    party: "Democratic",
  },
  {
    id: 16,
    name: "Abraham Lincoln",
    birthYear: 1809,
    deathYear: 1865,
    tookOffice: 1861,
    leftOffice: 1865,
    party: "Republican",
  },
  {
    id: 17,
    name: "Andrew Johnson",
    birthYear: 1808,
    deathYear: 1875,
    tookOffice: 1865,
    leftOffice: 1869,
    party: "Democratic",
  },
  {
    id: 18,
    name: "Ulysses S. Grant",
    birthYear: 1822,
    deathYear: 1885,
    tookOffice: 1869,
    leftOffice: 1877,
    party: "Republican",
  },
  {
    id: 19,
    name: "Rutherford B. Hayes",
    birthYear: 1822,
    deathYear: 1893,
    tookOffice: 1877,
    leftOffice: 1881,
    party: "Republican",
  },
  {
    id: 20,
    name: "James A. Garfield",
    birthYear: 1831,
    deathYear: 1881,
    tookOffice: 1881,
    leftOffice: 1881,
    party: "Republican",
  },
  {
    id: 21,
    name: "Chester A. Arthur",
    birthYear: 1829,
    deathYear: 1886,
    tookOffice: 1881,
    leftOffice: 1885,
    party: "Republican",
  },
  {
    id: 22,
    name: "Grover Cleveland",
    birthYear: 1837,
    deathYear: 1908,
    tookOffice: 1885,
    leftOffice: 1889,
    party: "Democratic",
  },
  {
    id: 23,
    name: "Benjamin Harrison",
    birthYear: 1833,
    deathYear: 1901,
    tookOffice: 1889,
    leftOffice: 1893,
    party: "Republican",
  },
  {
    id: 24,
    name: "Grover Cleveland",
    birthYear: 1837,
    deathYear: 1908,
    tookOffice: 1893,
    leftOffice: 1897,
    party: "Democratic",
  },
  {
    id: 25,
    name: "William McKinley",
    birthYear: 1843,
    deathYear: 1901,
    tookOffice: 1897,
    leftOffice: 1901,
    party: "Republican",
  },
  {
    id: 26,
    name: "Theodore Roosevelt",
    birthYear: 1858,
    deathYear: 1919,
    tookOffice: 1901,
    leftOffice: 1909,
    party: "Republican",
  },
  {
    id: 27,
    name: "William Howard Taft",
    birthYear: 1857,
    deathYear: 1930,
    tookOffice: 1909,
    leftOffice: 1913,
    party: "Republican",
  },
  {
    id: 28,
    name: "Woodrow Wilson",
    birthYear: 1856,
    deathYear: 1924,
    tookOffice: 1913,
    leftOffice: 1921,
    party: "Democratic",
  },
  {
    id: 29,
    name: "Warren G. Harding",
    birthYear: 1865,
    deathYear: 1923,
    tookOffice: 1921,
    leftOffice: 1923,
    party: "Republican",
  },
  {
    id: 30,
    name: "Calvin Coolidge",
    birthYear: 1872,
    deathYear: 1933,
    tookOffice: 1923,
    leftOffice: 1929,
    party: "Republican",
  },
  {
    id: 31,
    name: "Herbert Hoover",
    birthYear: 1874,
    deathYear: 1964,
    tookOffice: 1929,
    leftOffice: 1933,
    party: "Republican",
  },
  {
    id: 32,
    name: "Franklin D. Roosevelt",
    birthYear: 1882,
    deathYear: 1945,
    tookOffice: 1933,
    leftOffice: 1945,
    party: "Democratic",
  },
  {
    id: 33,
    name: "Harry S. Truman",
    birthYear: 1884,
    deathYear: 1972,
    tookOffice: 1945,
    leftOffice: 1953,
    party: "Democratic",
  },
  {
    id: 34,
    name: "Dwight D. Eisenhower",
    birthYear: 1890,
    deathYear: 1969,
    tookOffice: 1953,
    leftOffice: 1961,
    party: "Republican",
  },
  {
    id: 35,
    name: "John F. Kennedy",
    birthYear: 1917,
    deathYear: 1963,
    tookOffice: 1961,
    leftOffice: 1963,
    party: "Democratic",
  },
  {
    id: 36,
    name: "Lyndon B. Johnson",
    birthYear: 1908,
    deathYear: 1973,
    tookOffice: 1963,
    leftOffice: 1969,
    party: "Democratic",
  },
  {
    id: 37,
    name: "Richard Nixon",
    birthYear: 1913,
    deathYear: 1994,
    tookOffice: 1969,
    leftOffice: 1974,
    party: "Republican",
  },
  {
    id: 38,
    name: "Gerald Ford",
    birthYear: 1913,
    deathYear: 2006,
    tookOffice: 1974,
    leftOffice: 1977,
    party: "Republican",
  },
  {
    id: 39,
    name: "Jimmy Carter",
    birthYear: 1924,
    deathYear: null,
    tookOffice: 1977,
    leftOffice: 1981,
    party: "Democratic",
  },
  {
    id: 40,
    name: "Ronald Reagan",
    birthYear: 1911,
    deathYear: 2004,
    tookOffice: 1981,
    leftOffice: 1989,
    party: "Republican",
  },
  {
    id: 41,
    name: "George H. W. Bush",
    birthYear: 1924,
    deathYear: null,
    tookOffice: 1989,
    leftOffice: 1993,
    party: "Republican",
  },
  {
    id: 42,
    name: "Bill Clinton",
    birthYear: 1946,
    deathYear: null,
    tookOffice: 1993,
    leftOffice: 2001,
    party: "Democratic",
  },
  {
    id: 43,
    name: "George W. Bush",
    birthYear: 1946,
    deathYear: null,
    tookOffice: 2001,
    leftOffice: 2009,
    party: "Republican",
  },
  {
    id: 44,
    name: "Barack Obama",
    birthYear: 1961,
    deathYear: null,
    tookOffice: 2009,
    leftOffice: 2017,
    party: "Democratic",
  },
  {
    id: 45,
    name: "Donald J. Trump",
    birthYear: 1946,
    deathYear: null,
    tookOffice: 2017,
    leftOffice: 2021,
    party: "Republican",
  },
  {
    id: 46,
    name: "Joe Biden",
    birthYear: 1942,
    deathYear: null,
    tookOffice: 2021,
    leftOffice: null,
    party: "Democratic",
  }
];




/* Iteration 1 | Names of All Presidents - `map()`

We will start our practice of JS array methods by working with the map() method.

The map() method creates a new array populated with the results returned from the provided callback function for every element in the array. The callback function should return a value to be included in the new array.


Implement the function getNames() that takes the presidents array as an argument. The function should return a new array of strings containing only the names of presidents.

You must use the map() method in your implementation to create the new array.

*/

function getNames(presidentsArr) {

  let presidentsNames = presidentsArr.map((president) => president.name); 

  return presidentsNames; 

}

getNames(presidents); 



/* Iteration 2 | Democratic Presidents - `filter()`

Next up, we will practice using the filter() method. The filter() method creates a new array containing the elements for which the callback function returns true. In other words, the filter() method creates a new array containing only the elements that pass the test implemented by the callback function.


Implement the function getDemocraticPresidents() that takes the presidents array as an argument. The function should use the filter() method to create a new filtered array containing only the presidents who belonged to the Democratic party. The function should then return the new filtered array.

The presidents who belonged to the Democratic party have the party property set to "Democratic".

*/


function getDemocraticPresidents(presidentsArr) {

  let democraticsPotus = presidentsArr.filter((president) => president.party === "Democratic"); 

  return democraticsPotus; 

}

getDemocraticPresidents(presidents);



/* Iteration 3 | Count Years in Office - reduce()

Next on our practice menu is the reduce() method.

The reduce() method executes a reducer function (callback) for each value of an array. During each iteration, the reducer function receives the accumulated value and returns a new value to be used as the accumulated value for the next iteration. The reduce() method returns a single value, which is the final accumulated result.


Implement the function countYearsInOffice() that takes the presidents array as an argument. The function should use the reduce() method to count the total years that all the presidents served in office (leftOffice - tookOffice). The function should then return a number representing the total years.

Important: You should skip the president who is still in office (the president with the leftOffice property set to null) and not include them in the total years.

*/

function  countYearsInOffice(presidentsArr) {

 

  return presidentsArr.reduce((totalYearsInOffice,  president) => {

    if (president.leftOffice !== null){ //Con esto tenemos a todos los presidentes menos al actual. 

     return totalYearsInOffice + (president.leftOffice - president.tookOffice)

    }
    
    return totalYearsInOffice;
    }, 0); 


}

countYearsInOffice(presidents); 


/* Iteration 4 | Sort Presidents by Birth Year - `sort()`

For the final few mandatory iterations, we will practice using the sort() method.

The sort() method is used to sort the elements of an array in place. This means the original array is mutated, and the sorted elements are rearranged within the same array. To sort an array, we need to pass a compare function to the sort() method with the conditional logic that returns -1, 1, or 0 and specifies how to sort the elements.


Implement the function sortPresidentsByBirthYear() that takes the presidents array as an argument. The function should use the sort() method to sort the presidents array by birth year, from oldest to youngest. The function should then return the sorted array of presidents.

*/
function sortPresidentsByBirthYear(presidents) {
  return presidents.sort((presidents1, presidents2) => {
  return presidents1.birthYear - presidents2.birthYear; 
  })
}

 console.log("ageAtInauguration(presidents)", ageAtInauguration(presidents));


/* Bonus: Iteration 5 | Age at Inauguration - `map()`

Implement the function getAgeAtInauguration() that takes the presidents array as an argument. The function should use the map() method to create a new array of updated president objects, with a new property ageAtInauguration containing the age of each president when they took office. The function should then return the new array containing the updated president objects, where each object contains the new property ageAtInauguration.

*/

function getAgeAtInauguration(presidentsArr) {

  let newArray


}




// Bonus: Iteration 6 | Presidents Born After - `filter()`
function getPresidentsBornAfter(presidentsArr, year) {}




// Bonus: Iteration 7 | Count Republican Presidents
function countRepublicanPresidents(presidentsArr) {}




// Bonus: Iteration 8 | Sort Presidents by Name - `sort()`
function sortPresidentsByName(presidentsArr) {}

