const form = document.querySelector("form")
const title = document.querySelector(".title")
const image = document.querySelector("img")
const year = document.querySelector(".y-date")
const ratings = document.querySelector(".r-rating")
const date = document.querySelector(".r-y-date")
const genre = document.querySelector(".r-genre")
const writer = document.querySelector(".r-writer")
const actors = document.querySelector(".r-actors")
const plot = document.querySelector(".r-plot")
const fetchData = async (searchItem) => {
    const apikey = "a4a68f50";
    const data = await fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=${searchItem}`);
    const response = await data.json()
    console.log(response)
    title.innerHTML = response.Title;
    image.setAttribute("src", response.Poster)
    year.innerHTML = response.Year
    ratings.innerHTML = response.Rated
    data.innerHTML = response.Released
    genre.innerHTML = response.Genre
    writer.innerHTML = response.Writer
    actors.innerHTML = response.Actors
    plot.innerHTML = response.Plot
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchItem = document.querySelector("input").value
    fetchData(searchItem)

})


















































// const form = document.querySelector("form");
// const main = document.querySelector(".main-container")
// const getMovies = async (SearchItem) => {
//     const key = "a4a68f50";
//     const data = await fetch(`http://www.omdbapi.com/?apikey=${key}&t=${SearchItem}`);
//     const response = await data.json();
//     console.log(response)
//     main.innerHTML = `<div class="movie-details-wrapper"><img src="${response.Poster} alt="Poster" class="poster">
// <p class="plot">${response.Plot}</p>
// <div class="ratings"><strong>Ratings</strong><i class="fa-solid fa-star"></i>${response.Ratings[0].Value}</div>
// <div class="cast"><p class="cast-header"><strong>Cast</strong></p>  ${response.Actors} </div>
// <div class="director">  <strong>Director: </strong>${response.Director}</div>
// <div class="genre"><strong>Genre: </strong>${response.Genre}</div></div>`

// }
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const movie = document.querySelector("form input");
//     if (movie.value === "") {
//         alert("Cannot be empty")
//     } else {
//         getMovies(movie.value.trim())
//     }
// })
