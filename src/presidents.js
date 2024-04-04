//lab from week 02, day 04 - 04.04.24
//We'll use the array methods map(), filter, reduce(), and sort()
//to iterate over the array and format, filter, and sort the data.

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
  },
];

// Iteration 1: Names of Presidents - `map()`
//The map() method creates a new array populated with the results returned from the provided callback function for every element in the array.
function getNames(presidentsArr) {
  const presidentNames = presidentsArr.map((president) => {
    return president.name;
  });
  return presidentNames;
}

//for each element inside of the array do this
//since the map method is already applied on an array
//then it will create also a new array "finalGrades" with the method result

//testing the output
console.log(getNames(presidents));

// console.log("getNames(presidents)", getNames(presidents));

//****mapping example from class today 04.04.24 */
// //Mapping similar to "forEach" student
// const finalGrades = students.map((theStudent) => {
//   //lets find the project average ((project 1 + project 2)/2)
//   //this project avg will be 40% of total grade
//   const projectsAvg = (theStudent.firstProject + theStudent.secondProject) / 2;
//   //final grade is finalexam 60% + projectavg 40%
//   const finalGrade = theStudent.finalExam * 0.6 + projectsAvg * 0.4;
//   return {
//     //we want to return an array of objects
//     //for each student it is an object containing name and final grade
//     name: theStudent.name,
//     finalGrade: Math.round(finalGrade),
//   };
// });

// Iteration 2: Name and Party  - `map()`
function getNamesAndParty(presidentsArr) {
  const presidentNamesandParty = presidentsArr.map((president) => {
    return `${president.name} , ${president.party}`;
  });
  return presidentNamesandParty;
}

// console.log("getNamesAndParty(presidents)", getNamesAndParty(presidents));

// Iteration 3: Democratic presidents - `filter()`
//the filter() method creates a new array containing only the elements that pass the test implemented by the callback function.
function getDemocraticPresidents(presidentsArr) {
  const filterDemocratic = presidentsArr.filter((president) => {
    return president.party === "Democratic";
  });
  return filterDemocratic;
}

// console.log("getDemocraticPresidents(presidents)", getDemocraticPresidents(presidents));

// Iteration 4: Affiliated Presidents - `filter()`
//since no instructions, assuming that affiliated are all the presidents which party !== null
function getAffiliatedPresidents(presidentsArr) {
  const affiliated = presidentsArr.filter((president) => {
    return president.party !== null;
  });
  return affiliated;
}

// console.log(
//   "getAffiliatedPresidents(presidents) - these presidents are affiliated and have a party",
//   getAffiliatedPresidents(presidents)
// );

//extra, these presidents do not have a party
function getNoPartyPresidents(presidentsArr) {
  const noPartyPresidenty = presidentsArr.filter((president) => {
    return president.party === null;
  });
  return noPartyPresidenty;
}

console.log(
  "getNoPartyPresidents(presidents) - these presidents do NOT have a party",
  getNoPartyPresidents(presidents) // George Washington and John Tyler
);

// Iteration 5: Count Years in Office - `reduce()`

//During each iteration, the reducer function receives the accumulated value
// and returns a new value to be used as the accumulated value for the next iteration.
//The reduce() method returns a single value, which is the final accumulated result.

// count the total years that all the presidents served in office (leftOffice - tookOffice).
// The function should then return a number representing the total years.
// Important: You should skip the president who is still in office
// (the president with the leftOffice property set to null) and not include them in the total years.

// //first lets create new array without the latest president
// // The pop() method removes (pops) the last element of an array.
// // The pop() method changes the original array.
// // The pop() method returns the removed element.

const latestPresident = presidents.pop();
presidents.pop();

// console.log("these are presidents without latest", presidents);

let totalYearsServed = 0;
//now we start this function with the presidents array already excluding the last
function countYearsInOffice(presidentsArr) {
  //find the total left office time, without including the latest president
  const totalLeftOffice = presidentsArr.reduce((acc, curr) => {
    return acc + curr.leftOffice;
  }, 0);
  //find the total took office time, without including the latest president
  const totalTookOffice = presidentsArr.reduce((acc, curr) => {
    return acc + curr.tookOffice;
  }, 0);

  //push the result into the totalYearsServed array
  totalYearsServed = totalLeftOffice - totalTookOffice;
  return Number(totalYearsServed + 4); //because the current president already served 4 years
}

console.log("countYearsInOffice(presidents)", countYearsInOffice(presidents));
//output: countYearsInOffice(presidents) [ 232 ]
//doesnt pass the tests because we need if statements :(

//GENIOUS DOING THIS WITHOUT ONE SINGLE GOOGLE!!! O/
//didnt pass the tests because they want an "if statement"

// //example reduce from class
// const averageCalories = menu.reduce((acc, curr) => {
//   return acc + curr.calories; //the reduce needs to finish accumulating
// }, 0); //so we cannot do the average here
// //therefore we will do average after we accumulate, when we console.log
// console.log(averageCalories / menu.length); // 278

//BEFORE DOING NEXT ITERACTIONS, LET'S RETURN THE LATEST PRESIDENT TO THE ARRAY
//The push() method adds new items to the end of an array.
presidents.push(latestPresident);
console.log(presidents); //this is working, included Joe Biden back

// // Iteration 6: Count Republican Presidents - `reduce()`
// function countRepublicanPresidents(presidentsArr) {
//   //first filter the republicans into a new array
//   const onlyRepublicans = presidentsArr.filter((president) => {
//     return president.party === "Republican";
//   });

//   //now we can reduce to count this
//   const republicans = onlyRepublicans.reduce((acc, curr) => {
//     return acc + curr;
//   });
//   return republicans;
// }
// console.log(republicans);

// console.log(
//   "countRepublicanPresidents(presidents)",
//   countRepublicanPresidents(presidents)
// );

// Iteration 7: Sort Presidents by Birth Year - `sort()`
//The sort() method is used to sort the elements of an array in place.
//This means the original array is mutated,
//and the sorted elements are rearranged within the same array.

//The function should use the sort() method to sort the presidents array by birth year,
// from oldest to youngest.

// let allBirthYears = [];

// function sortPresidentsByBirthYear(presidentsArr) {
//   //create a new array only with birthyears with map
//   presidentsArr.forEach((president) => allBirthYears.push(president.birthYear));

//   allBirthYears.sort((a, b) => a - b);
//   return allBirthYears;
// }
// //doesnt pass the tests because we need to have the presidents array passed as argument :(
// console.log(sortPresidentsByBirthYear(presidents));

//Iteration 7 - sort by birth year
function sortPresidentsByBirthYear(presidentsArr) {
  const sortedArray = presidentsArr.sort((a, b) => {
    return a.birthYear - b.birthYear;
  });
  return sortedArray;
}

// BONUS: Iteration 8 | Age At Inauguration - `map()`

//The function should use the map() method to create a new array of updated president objects,
//with a new property ageAtInauguration containing the age of each president when they took office.
function getAgeAtInauguration(presidentsArr) {}

// console.log("ageAtInauguration(presidents)", ageAtInauguration(presidents));

// BONUS: Iteration 9 | Presidents Born After - `filter()`
// getPresidentsBornAfter() that takes two arguments: the presidents array and a year.
// The function should use the filter() method to create a new array containing
// only the presidents who were born after the year provided as an argument.
function getPresidentsBornAfter(presidentsArr, year) {
  const bornAfterYear = presidentsArr.filter((president) => {
    if (president.birthYear > year) {
      return president.birthYear;
    }
  });
  return bornAfterYear;
}

// console.log("getPresidentsBornAfter(presidents)", getPresidentsBornAfter(presidents));

// BONUS: Iteration 10: Sort Presidents by Name - `sort()`
function sortPresidentsByName(presidentsArr) {
  const sortedArray2 = presidentsArr.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return sortedArray2;
}

//bonus iteration 11 count republicans
function countRepublicanPresidents(presidentsArr) {
  presidentsArr.filter((president) => president.party === "Republican");
  return presidentsArr.reduce((acc) => {
    return acc++;
  }, 0);
}
