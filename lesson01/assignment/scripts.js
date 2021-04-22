// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form');
  // Find the adding form, and handle its submit event
  const addingForm = document.querySelector('#adding-form');
  // Find the filter form, and handle its submit event
  const filterForm = document.querySelector('#filter-form');
  // Find the includes form, and handle its submit event
  const includesForm = document.querySelector('#includes-form');
  // Find the name form, and handle its submit event
  const nameForm = document.querySelector('#name-form');

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault();

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8];

    const inputField = document.querySelector('#example-form .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber);

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum;
    }

    // Clear the form field so the user can try again
    inputField.value = '';
  })

  addingForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault();

    // An array that we can transform based on user input
    let data = [];

    const inputField = document.querySelector('#adding-form .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber);

      // Use map to add 5 to the data in the array
      const result = data.map(x => x + 5);

      // Output the result to the page
      document.querySelector('#adding-form .output').innerHTML = result;
    }

    // Clear the form field so the user can try again
    inputField.value = '';
  })

  filterForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault();

    // An array that we can transform based on user input
    let data = [7, 10, 22, 5, 3];

    const inputField = document.querySelector('#filter-form .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber);

      // Use filter to show all numbers larger than 7
      const result = data.filter(x => x > 7);

      // Output the result to the page
      document.querySelector('#filter-form .output').innerHTML = result;
    }

    // Clear the form field so the user can try again
    inputField.value = '';
  })

  includesForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault();

    // An array that we can transform based on user input
    let data = [];

    const inputField = document.querySelector('#includes-form .input');
    const userInput = inputField.value;
    const userNumber = parseInt(userInput);

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber);

      // Use includes to determine if there is a 7
      const result = data.includes(7);

      // Output the result to the page
      document.querySelector('#includes-form .output').innerHTML = result;
    }

    // Clear the form field so the user can try again
    inputField.value = '';
  })

  nameForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault();

    // An array that we can transform based on user input
    let data = ['Bob', 'Michael', 'Rachel', 'Zoe'];

    const inputField = document.querySelector('#name-form .input');
    const userInput = inputField.value;

    if(isNaN(userInput)){
      // Add the user input into the array
      data.push(userInput);
      // Sort the array in ascending order
      data.sort();

      // Use find to show the first name with the second letter a
      const result = data.find(n => n[1] == 'a');

      // Output the result to the page
      document.querySelector('#name-form .output').innerHTML = result;
    }
    // Clear the form field so the user can try again
    inputField.value = '';
  })
})
