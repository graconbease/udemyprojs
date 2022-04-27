const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputTags = document.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

let userInputs = [];
const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const renderNewMovieElement = (id, title, imgURL, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element_image">
    <img src="${imgURL}" alt="${title}" width="200px">
  </div>
  <div class="movie-element_info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  </div>
  `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => { // function() {}
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovie = () => {
  toggleMovieModal();
  clearUserInputs();
};

const getUserInputs = () => {
  userInputs[0] = document.getElementById("title").value;
  userInputs[1] = document.getElementById("image-url").value;
  userInputs[2] = document.getElementById("rating").value;
};

const clearUserInputs = () => {
  for (const userInput of userInputTags) {
    userInput.value = "";
  }
};

const addMovieHandler = () => {
  getUserInputs();
  const titleVal = userInputs[0];
  const imgURL = userInputs[1];
  const ratingVal = userInputs[2];

  if (
    titleVal.trim() === "" || 
    imgURL.trim() === "" || 
    ratingVal.trim() === "" || 
    +ratingVal < 1 ||
    +ratingVal > 5
  ) {
    alert("Please enter valid values");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleVal,
    image: imgURL,
    rating: ratingVal
  }
   
  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearUserInputs();
  renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie)
confirmAddMovieButton.addEventListener('click', addMovieHandler)