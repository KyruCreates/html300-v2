// Create the Dog class constructor
function Dog(name, age, breed, color){
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.color = color;
  this.energyLevel = 0;
  this.barkLevel = 10;
  this.pat = function() {
    this.energyLevel += 1;
    this.barkLevel -= 1;
    console.log(`This dog is called ${this.name} and is ${this.age} years old. Bark level is ${this.barkLevel}, energy level is ${this.energyLevel}.`)
  }
}
// Create Marty
const marty = new Dog("Marty", 8, "terrier", "brown");

// Pat him 5 times
marty.pat();
marty.pat();
marty.pat();
marty.pat();
marty.pat();
