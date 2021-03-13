import React from 'react'
import {
    Link
} from "react-router-dom";

function Movie(props) {
    return (
        <>
            <div className = "movie_wrapper">
                <div className = "movie_title">{props.title}</div>  
                <img className = "movie_poster" src = {props.poster} alt = {props.title}></img>
                <div className = "movie_year">{props.year}</div>  
                <div className = "movie_title">{props.type}</div>  

                <Link to={`/${props.id}`}>
                    <button type="button" className="btn btn-info">Detail</button>
                </Link>
            </div>
        </>
    )
}

export default Movie
