import React, {useEffect, useState} from 'react'
import NavBar from './NavBar';
import Movie from './Movie';
import WatchedSummery from './WatchedSummery';
import MovieList from './MovieList';
import { func } from 'prop-types';

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
const KEY = "2df59e87";

export default function Main() {
    const [query, setQuery] = useState("inception")
    const [movies, setMovies] = useState([]);
    const [watched, setWatched] = useState([]);
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);
    const [isLoding, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [selectedId, setSelectedId] = useState(null)
    // const KEY = "f84fc31d"
    const temQuerry = "interstellar";

    function handleSelectMovie(id){
      setSelectedId((selectedId) => (id === selectedId ? null : id))
    }

    function handleCloseMovie(){
      setSelectedId(null)
    }

    useEffect(function(){
      async function fetchMovie(){
      try {
        setIsLoading(true);
        setError("")
        const res = await fetch(
          // `https://www.omdbapi.com/?apikey=${KEY}&s=${temQuerry}`,
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");
        
        const data = await res.json();
        if(data.Response === 'False') throw new Error ("Movie not found")
        setMovies(data.Search);
      } catch (err) {
        console.error(err.message);
        setError(err.message)
      }
      finally{
        setIsLoading(false);
      }
      }
      if(query.length < 3){
        setMovies([])
        setError('')
        return
      }
      fetchMovie()
      }, [query])
    
  return (
    <>
      <NavBar movies={movies} query={query} setQuery={setQuery} />
      <main className="main">
        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? "-" : "+"}
          </button>
          {/* {isLoding ?  (<p className="loader">Loading...</p>) : 
            (isOpen1 && (
              <ul className="list">
                {movies?.map((movie) => (
                  <MovieList movie={movie} key={movie.imdbID} />
                ))}
              </ul>
            ))
          } */}
          {isLoding && <p className="loader">Loading...</p>}
          {!isLoding && !error && isOpen1 && (
            <ul className="list list-movies">
              {movies?.map((movie) => (
                <MovieList
                  movie={movie}
                  key={movie.imdbID}
                  onSelectMovie={handleSelectMovie}
                />
              ))}
            </ul>
          )}
          {error && <ErrorMessage message={error} />}
        </div>

        <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "-" : "+"}
          </button>
          {isOpen2 && (
            <>
              {selectedId ? (
                <MovieDetails
                  selectedId={selectedId}
                  onCloseMovie={handleCloseMovie}
                />
              ) : (
                <>
                  <WatchedSummery watched={watched} />
                  <ul className="list">
                    {watched.map((movie) => (
                      <Movie movie={movie} key={movie.imdbID} />
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}


function ErrorMessage({message}){
  return <p className='error'>{message}</p>
}

function MovieDetails({selectedId, onCloseMovie}){
  return <div className='details'>
    <button className='btn-back' onClick={onCloseMovie}>&larr;</button>
    {selectedId}</div>
}