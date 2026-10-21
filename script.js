const movies = [
  { title: "Interstellar", year: 2014, rating: 8.7, genre: "Sci-Fi", icon: "🚀", colors: ["#173b62", "#11172d"], description: "Space and discovery" },
  { title: "3 Idiots", year: 2009, rating: 8.4, genre: "Comedy", icon: "🎓", colors: ["#b86b35", "#4a2b49"], description: "Friendship and learning" },
  { title: "Dangal", year: 2016, rating: 8.3, genre: "Sports", icon: "🥇", colors: ["#79512c", "#252c3f"], description: "A sports drama" },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action", icon: "🦇", colors: ["#343d4d", "#111318"], description: "A city needs a hero" },
  { title: "Zindagi Na Milegi Dobara", year: 2011, rating: 8.2, genre: "Drama", icon: "🌊", colors: ["#268d9a", "#173454"], description: "Friends on a journey" },
  { title: "The Avengers", year: 2012, rating: 8.0, genre: "Action", icon: "🦸", colors: ["#6d2f39", "#17213d"], description: "Heroes unite" },
  { title: "Taare Zameen Par", year: 2007, rating: 8.3, genre: "Drama", icon: "🎨", colors: ["#3f8b9b", "#e3a54e"], description: "Every child is special" },
  { title: "PK", year: 2014, rating: 8.1, genre: "Comedy", icon: "👽", colors: ["#5a8b76", "#243a56"], description: "A curious visitor" },
  { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi", icon: "🌀", colors: ["#625077", "#20233d"], description: "Dreams within dreams" },
  { title: "Chak De! India", year: 2007, rating: 8.1, genre: "Sports", icon: "🏑", colors: ["#236c54", "#152b3d"], description: "Teamwork and determination" },
  { title: "Jumanji: Welcome to the Jungle", year: 2017, rating: 6.9, genre: "Comedy", icon: "🌴", colors: ["#34765b", "#26364b"], description: "An adventure game" },
  { title: "Mad Max: Fury Road", year: 2015, rating: 8.1, genre: "Action", icon: "🏎️", colors: ["#c56b36", "#51303c"], description: "High-speed adventure" }
];

const grid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const resultMessage = document.getElementById("resultMessage");

function renderMovies() {
  const query = searchInput.value.trim().toLowerCase();
  const genre = genreFilter.value;
  const filtered = movies.filter(movie => {
    const matchesQuery = movie.title.toLowerCase().includes(query);
    const matchesGenre = genre === "All" || movie.genre === genre;
    return matchesQuery && matchesGenre;
  });

  resultMessage.textContent = `${filtered.length} movie${filtered.length === 1 ? "" : "s"} found`;
  if (!filtered.length) {
    grid.innerHTML = '<div class="empty-state">No movies found. Try another title or genre.</div>';
    return;
  }

  grid.innerHTML = filtered.map(movie => `
    <article class="movie-card">
      <div class="poster" style="--poster-a:${movie.colors[0]};--poster-b:${movie.colors[1]}">
        <div>${movie.icon}<span>MOVIE MAGIC</span></div>
      </div>
      <div class="movie-info">
        <h3>${escapeHTML(movie.title)}</h3>
        <div class="movie-meta"><span>${movie.year} · ${movie.description}</span><strong>⭐ ${movie.rating.toFixed(1)}</strong></div>
        <span class="genre-pill">${movie.genre}</span>
      </div>
    </article>
  `).join("");
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

searchInput.addEventListener("input", renderMovies);
document.getElementById("searchButton").addEventListener("click", renderMovies);
genreFilter.addEventListener("change", renderMovies);
renderMovies();
