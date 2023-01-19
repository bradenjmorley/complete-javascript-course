let country = "Canada";
let continent = "North America";
let population = 38;

console.log(country);
console.log(continent);
console.log(population);



var isIsland = false;
var language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);



language = "English";
const countryConst = country;
const continentConst = continent;
const isIslandConst = isIsland;
const languageConst = language;



console.log(population / 2);
console.log(population + 1);
console.log(population > 6);
console.log(population < 33);

var description = countryConst + " is in " + continentConst + ", and its " + population + " million people speak " + languageConst;
console.log(description);

var descriptionTemplateLiteral = `${countryConst} is in ${continentConst}, and its ${population} million people speak ${languageConst}`;



if (population > 33) {
    console.log(`${countryConst}'s population is above average.`)
}
else {
    console.log(`${countryConst}'s population is ${33 - population} million below average.`)
}