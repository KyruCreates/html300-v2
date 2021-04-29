const cardsJSON = '[{"name": "Paolo Maldini","jobTitle": "Front End Developer","company": "Web Weavers","experience": "3 years","school": "University of Washington","major": "Marketing","email": "paolo@example.com","linkedInUrl": "paolo.linkedinprofile.com","codeLanguages": ["HTML", "CSS", "JavaScript", "Node", "Express"]},{"name": "Barbara Bonansea","jobTitle": "Software Engineer","company": "Excellence in the Cloud","experience": "12 years","school": "University of Southern California","major": "Computer Science","email": "barbara@example.com","linkedInUrl": "barbara.linkedinprofile.com","codeLanguages": ["HTML", "JavaScript", "C", "Go"]},{"name": "Javier Hernandez","jobTitle": "User Experience Engineer","company": "Web Sites and More","experience": "5 years","school": "Seattle University","major": "Performing Arts","email": "javier@example.com","linkedInUrl": "javier.linkedinprofile.com","codeLanguages": ["HTML", "CSS"]},{"name": "Maribel Dominguez","jobTitle": "Front End Engineer","company": "Bits and Bytes","experience": "6 years","school": "University of Washington","major": "Mechanical Engineering","email": "maribel@example.com","linkedInUrl": "maribel.linkedinprofile.com","codeLanguages": ["HTML", "CSS", "JavaScript", "React", "Vue", "Redux"]}]';

// turning the JSON into a javascript object
const cards = JSON.parse(cardsJSON);
// container for the template-hook section
const container = document.querySelector('.template-hook');

// TO DO: Make output variable hold html with info about each person card in the list
//    a. in class card, input: image, h1 (name), and p (position/jobTitle)
// Loop through all elements of the list
cards.forEach(function(c){
  // Build HTML
  let list = document.createElement('div');
  list.className = 'card';
  list.innerHTML = `
    <img src="./img/headshot.jpg" alt="headshot for a cute dog">
    <h1>${c.name}</h1>
    <p>${c.jobTitle}</p>
  `
  //    b. in class card-more, input: p (company), p (experience), p (school), p (major), p (email (a href)), img (linkedin), a (linkedInUrl), p (codeLanguages)
  let listMore = document.createElement('div');
  listMore.className = 'card-more';
  listMore.innerHTML = `
    <p><strong>Company:</strong> ${c.company}</p>
    <p><strong>Experience:</strong> ${c.experience}</p>
    <p><strong>School:</strong> ${c.school}</p>
    <p><strong>Major:</strong> ${c.major}</p>
    <p><strong>Email:</strong> <a href="#">${c.email}</a></p>
    <img src="./img/linkedin.svg" alt="LinkedIn blue and white logo">
    <a href="#">${c.linkedInUrl}</a>
    <p><strong>Code Languages:</strong> ${c.codeLanguages}</p>
  `
  // Insert HTML into page
  container.append(list);
  container.append(listMore);
});
