// Create a container element for the movie ratings form
const container = document.createElement('div');

// Create a form for the movie ratings
const form = document.createElement('form');

// Create a heading for the form
const heading = document.createElement('h1');
heading.textContent = 'Rate this movie';

// Add the heading to the form
form.appendChild(heading);

// Create a field for the user to enter their name
const nameField = document.createElement('input');
nameField.type = 'text';
nameField.placeholder = 'Enter your name';
nameField.required = true;

// Add the name field to the form
form.appendChild(nameField);

// Create a field for the user to enter the movie name
const movieField = document.createElement('input');
movieField.type = 'text';
movieField.placeholder = 'Enter the movie name';
movieField.required = true;

// Add the movie field to the form
form.appendChild(movieField);

// Create a field for the user to enter their rating
const ratingField = document.createElement('input');
ratingField.type = 'number';
ratingField.min = 1;
ratingField.max = 5;
ratingField.required = true;

// Add the rating field to the form
form.appendChild(ratingField);

// Create a submit button
const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';

// Add the submit button to the form
form.appendChild(submitButton);

// Add the form to the container element
container.appendChild(form);

// Add the container to the DOM
document.body.appendChild(container);

// Handle the form submission
form.addEventListener('submit', (e) => {
  // Prevent the form from submitting
  e.preventDefault();

  // Get the user's name, movie, and rating from the form
  const name = nameField.value;
  const movie = movieField.value;
  const rating = ratingField.value;

  // Log the user's movie rating
  console.log(`${name} rated ${movie} ${rating} stars`);
});
