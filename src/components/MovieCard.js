import React from 'react';
const MovieCard = (props)=>{
    return (
        <div className='movie'>
                <div>
                    <p>{props.movie.show.premiered}</p>
                </div>
                <div>
                    <img src = {props.movie.show.image.medium} alt={"movie[i].name"}/>
                </div>
                <div>
                    <span>{props.movie.show.type}</span>
                    <h3>{props.movie.show.name}</h3>
                </div>
            </div>
    );
}

export default MovieCard;