const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';



async function fetchMovies() {
    const res = await fetch(API_URL);
    const data = await res.json();
    displayMovies(data.results);
}

function displayMovies(movies) {
    const main = document.createElement('main');
    main.classList.add('movie-container');
    document.body.appendChild(main);

    movies.forEach(movie => {
        const { title, poster_path, vote_average } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie-card');
        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="rating">${vote_average}</span>
            </div>
        `;
        main.appendChild(movieEl);
    });
}

fetchMovies();