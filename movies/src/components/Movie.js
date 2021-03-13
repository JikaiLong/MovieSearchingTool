import React from 'react'
import {
    Link, Route
  } from "react-router-dom";
import DetailPage from './DetailPage'

function Movie(props) {

    return (
        <>
            <Route path={`/${props.id}`}> <DetailPage id = {props.id}/> </Route>
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
