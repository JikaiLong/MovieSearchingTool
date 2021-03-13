import React from 'react'
import {
    Link, Route
  } from "react-router-dom";
import DetailPage from './DetailPage'
import './Movie.css'

function Movie(props) {

    return (
        <>
            <Route path={`/${props.id}`}> <DetailPage id = {props.id}/> </Route>
            <div className = "movie_wrapper1">

                <div className = "movie_title">{props.title}</div> 

                    <img className = "movie_poster" src = {props.poster} alt = {props.title}></img>
                <div className = "info_wrapper">
                    <div className = "movie_year">{props.year}</div>  
                    <div className = "movie_type">{props.type}</div> 

                <Link to={`/${props.id}`}>
                    <button type="button" className="btn">Detail</button>
                </Link>
                </div> 

            </div>
        </>
    )
}

export default Movie
