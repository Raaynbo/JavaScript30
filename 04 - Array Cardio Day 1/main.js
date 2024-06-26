// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

console.log("filter the inventor list to find only inventors born in 1500");
const filtered = inventors.filter(inventor => {return (Math.floor(inventor.year/100)*100)=== 1500});
console.table(filtered)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

console.log("concat firstand last names");
const fullnames = inventors.map(inventor => inventor.first+ " "+ inventor.last);
console.table(fullnames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

console.log("sorting by birthdate");
const invBdate = inventors.sort((a, b) => {return a.year - b.year});
console.table(invBdate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

console.log("cumulated years lived by all the inventors");
const totLived = inventors.reduce((tot, inventor) => {return tot + (inventor.passed - inventor.year)},0);
console.table(totLived)

// 5. Sort the inventors by years lived

console.log("sorting by years lived, descending");
const sortedTimeLived = inventors.sort((a, b) => {return (b.passed - b.year) - (a.passed - a.year)});
console.table(sortedTimeLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// CODE NEED TO BE RUN IN BROWSER DEVTOOLS ON THE WIKIPEDIA PAGE

/* 

const container = document.querySelector(".mw-category");
const links = Array.from(container.querySelectorAll("a"));
const blvdDe = links.map(link => link.textContent).filter(blvd => blvd.includes("de"));
console.table(blvdDe);
*/


// 7. sort Exercise
// Sort the people alphabetically by last name

console.log("sorting people by last Name");
const peopleSortedLast = people.sort();
console.table(peopleSortedLast);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

console.log("counting iteration");

const sums = data.reduce(function(obj,item){
    if (!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.table(sums)