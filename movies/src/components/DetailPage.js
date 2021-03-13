import React, {useState,useEffect} from 'react'
import {
    Link
} from "react-router-dom";

function DetailPage({match}) {
    const [title, setTitle] = useState("")
    const [poster, setPoster] = useState("")
    const [year, setYear] = useState("")
    const [type, setType] = useState("")
    const [released, setReleased] = useState("")
    const [genre, setGenre] = useState("")
    const [rating, setRating] = useState("")


    const saveData = (d) =>{
        setTitle(d.Title)
        setPoster(d.Poster)
        setYear(d.Year)
        setType(d.Type)
        setReleased(d.Released)
        setGenre(d.Genre)
        setRating(d.Rating)
    }

    useEffect(() => {
        let link = "http://www.omdbapi.com/?&apikey=e72ace58&i=" + match.params.id
        fetch(link).then(response => response.json()).then(saveData)
      });

    return (
        <>
            <div className = "movie_wrapper">
                <Link to="/">
                    <button type="button" className="btn btn-info">Back to Search</button>
                </Link>
                <div className = "movie_title">{title}</div>  
                <img className = "movie_poster" src = {poster} alt = {title}></img>
                <div className = "movie_year">{year}</div>  
                <div className = "movie_type">{type}</div>  
                <div className = "movie_released">{released}</div>  
                <div className = "movie_genre">{genre}</div>  
                <div className = "movie_rating">{rating}</div>  

            </div>

        </>
    )
}

export default DetailPage
