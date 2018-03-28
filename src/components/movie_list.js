import React from 'react';
import MovieListItem from './movie_list_item.js';

const MovieList = (props)=>{
    const movies = props.movies.map(movie=> {
        return (
            <MovieListItem key={movie.id} movie={movie} />
        )
    })

    if(!movies){
        return <div>Loading..</div>
    }

    return (
        <div className="movie-container">
            {movies}
        </div>
    )
};

export default MovieList;