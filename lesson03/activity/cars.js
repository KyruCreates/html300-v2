// TODO: Create HTML code from cars JSON

const carsJSON = '[{"make":"Ford","model":"Mustang","year":2010,"color":"black"},{"make":"Chevy","model":"Corvette","year":1984,"color":"red"},{"make":"Jeep","model":"Wrangler","year":1999,"color":"silver"}]'

// turning the JSON into a javascript object
const cars = JSON.parse(carsJSON);
console.log(cars[0]);

// TODO make output variable hold html with info about each car in the list
// creates a ul
let output = "<ul>";
cars.forEach(function(c) {
  // turn year, color, make, and model into a li
  output += `<li>${c.year} ${c.color} ${c.make} ${c.model}</i>`;

  // print out key & value
  // for(const key in c) {
  //   output += `<li>${key}: ${c[key]}</i>`;
  // }
});
// closes the ul
output += "</ul>";

document.querySelector("#list-container").innerHTML = output;
