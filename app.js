const form = document.querySelector("form");
const main = document.querySelector(".main-container")
const getMovies = async (SearchItem) => {
    const key = "a4a68f50";
    const data = await fetch(`http://www.omdbapi.com/?apikey=${key}&t=${SearchItem}`);
    const response = await data.json();
    console.log(response)
    main.innerHTML = `<img src="${response.Poster} alt="Poster">`

}
form.addEventListener("click", (e) => {
    e.preventDefault();
    const movie = document.querySelector("form input");
    getMovies(movie.value.trim())
})