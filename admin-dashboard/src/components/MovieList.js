import React, { useState, useEffect } from 'react';
import { getMovies, deleteMovie } from '../services/movieService';

const MovieList = ({ onEditMovie }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();
        setMovies(movies);
      } catch (error) {
        console.error('Error fetching movies', error);
      }
    };
    fetchMovies();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error('Error deleting movie', error);
    }
  };

  return (
    <div>
      <h2>Movie List</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
              <td>{movie.genre}</td>
              <td>
                <button onClick={() => onEditMovie(movie)}>Edit</button>
                <button onClick={() => handleDelete(movie.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
