// Iteration 1 | Names of All Presidents - `map()`
function getNames(presidentsArr) {
  return presidentsArr.map((president) => president.name);
}

console.log(getNames(presidents));




// Iteration 2 | Democratic Presidents - `filter()`
function getDemocraticPresidents(presidentsArr) {
  return presidentsArr.filter((president) => president.party === "Democratic");
}

console.log(getDemocraticPresidents(presidents));




// Iteration 3 | Count Years in Office - reduce()
function countYearsInOffice(presidentsArr) {
  return presidentsArr.reduce((sum, president) => {
    if (president.leftOffice === null) {
      return sum;
    }
    return sum + (president.leftOffice - president.tookOffice);
  }, 0);
}

console.log(countYearsInOffice(presidents));




// Iteration 4 | Sort Presidents by Birth Year - `sort()`
function sortPresidentsByBirthYear(presidentsArr) {
  return presidentsArr.sort((a, b) => a.birthYear - b.birthYear);
}




// Bonus: Iteration 5 | Age at Inauguration - `map()`
function getAgeAtInauguration(presidentsArr) {
  return presidentsArr.map((president) => {
    return { ...president, ageAtInauguration: president.tookOffice - president.birthYear };
  });
}




// Bonus: Iteration 6 | Presidents Born After - `filter()`
function getPresidentsBornAfter(presidentsArr, year) {
  return presidentsArr.filter((president) => president.birthYear > year);
}




// Bonus: Iteration 7 | Count Republican Presidents
function countRepublicanPresidents(presidentsArr) {
  return presidentsArr.reduce((count, president) => {
    if (president.party === "Republican") {
      return count + 1;
    }
    return count;
  }, 0);
}




// Bonus: Iteration 8 | Sort Presidents by Name - `sort()`
function sortPresidentsByName(presidentsArr) {
  return presidentsArr.sort((a, b) => a.name.localeCompare(b.name));
}