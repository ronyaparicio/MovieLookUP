import React from 'react';




const MovieListItem = ({movie})=> {
    const imgURL = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;


    if(!movie) {
        return <div>Loading...</div>
    }
    return(
        <div className='movie-item'>
            <img className="img" src={imgURL} />
        </div>
        
    )
}



export default MovieListItem;