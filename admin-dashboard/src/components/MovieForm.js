// src/components/MovieForm.js
import React, { useState, useEffect } from 'react';
import { addMovie, updateMovie } from '../services/movieService';

const MovieForm = ({ currentMovie, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');

  useEffect(() => {
    if (currentMovie) {
      setTitle(currentMovie.title);
      setDirector(currentMovie.director);
      setGenre(currentMovie.genre);
    } else {
      setTitle('');
      setDirector('');
      setGenre('');
    }
  }, [currentMovie]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const movie = { title, director, genre };
    try {
      if (currentMovie) {
        await updateMovie(currentMovie.id, movie);
      } else {
        await addMovie(movie);
      }
      onSave();
    } catch (error) {
      console.error('Error saving movie', error);
    }
  };

  return (
    <div>
      <h2>{currentMovie ? 'Edit Movie' : 'Add Movie'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Director</label>
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <button type="submit">{currentMovie ? 'Update' : 'Add'}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default MovieForm;
