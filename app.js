const form = document.querySelector("form");
const main = document.querySelector(".main-container")
const getMovies = async (SearchItem) => {
    const key = "a4a68f50";
    const data = await fetch(`http://www.omdbapi.com/?apikey=${key}&t=${SearchItem}`);
    const response = await data.json();
    console.log(response)
    main.innerHTML = `<div class="movie-details-wrapper"><img src="${response.Poster} alt="Poster" class="poster">
<p class="plot">${response.Plot}</p>
<div class="ratings"><strong>Ratings</strong><i class="fa-solid fa-star"></i>${response.Ratings[0].Value}</div>
<div class="cast"><p class="cast-header"><strong>Cast</strong></p>  ${response.Actors} </div>
<div class="director">  <strong>Director: </strong>${response.Director}</div>
<div class="genre"><strong>Genre: </strong>${response.Genre}</div></div>`

}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const movie = document.querySelector("form input");
    if (movie.value === "") {
        alert("Cannot be empty")
    } else {
        getMovies(movie.value.trim())
    }
})
