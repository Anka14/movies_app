
import { useEffect, useState } from 'react';
import './App.css';
import Movie from './components/Movie';

// API_Key = e2ea313b646a713c697b7ebc007299c3
// Example_API_request = "https://api.themoviedb.org/3/movie/550?api_key=e2ea313b646a713c697b7ebc007299c3"
// API_read_access_token = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmVhMzEzYjY0NmE3MTNjNjk3YjdlYmMwMDcyOTljMyIsInN1YiI6IjYzYjdlZWVjNDMyNTBmMDA4MmU5M2JiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7jwH9TCmK8YCExppekGMhcNM7kmbYpyFAnutuEQrf - U

const featured_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e2ea313b646a713c697b7ebc007299c3&page=1";

const search_API = "https://api.themoviedb.org/3/search/movie?&api_key=e2ea313b646a713c697b7ebc007299c3&query=";

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    getMovies(featured_API)
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMovies(data.results)
      })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetch(search_API + searchTerm)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setMovies(data.results)
        })
    } else {
      setSearchTerm("")
    }

  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>

      <header>
        <form type="action" onSubmit={handleOnSubmit}>
          <input className='search' type="text" placeholder='search' value={searchTerm} onChange={handleOnChange} />
        </form>

      </header>
      <div className="movie-container">

        {movies.length > 0 && movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  )
}

export default App;
