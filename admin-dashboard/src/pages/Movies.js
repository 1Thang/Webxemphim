import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import MovieForm from '../components/MovieForm';

const Movies = () => {
  const [editingMovie, setEditingMovie] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEditMovie = (movie) => {
    setEditingMovie(movie);
  };

  const handleSave = () => {
    setEditingMovie(null);
    setRefresh(!refresh);
  };

  const handleCancel = () => {
    setEditingMovie(null);
  };

  return (
    <div>
      <MovieForm
        currentMovie={editingMovie}
        onSave={handleSave}
        onCancel={handleCancel}
      />
      <MovieList onEditMovie={handleEditMovie} key={refresh} />
    </div>
  );
};

export default Movies;
