import React, {useState,useEffect} from 'react'
import {
    Link
} from "react-router-dom";
import './Movie.css'

function DetailPage({match}) {
    const [title, setTitle] = useState("")
    const [poster, setPoster] = useState("")
    const [year, setYear] = useState("")
    const [type, setType] = useState("")
    const [released, setReleased] = useState("")
    const [genre, setGenre] = useState("")
    const [rating, setRating] = useState([])


    const saveData = (d) =>{
        setTitle(d.Title)
        setPoster(d.Poster)
        setYear(d.Year)
        setType(d.Type)
        setReleased(d.Released)
        setGenre(d.Genre)
        setRating(d.Ratings)
    }

    useEffect(() => {
        let link = "http://www.omdbapi.com/?&apikey=e72ace58&i=" + match.params.id
        fetch(link).then(response => response.json()).then(saveData)
      });

    return (
        <>
            <div className = "movie-wrapper">
                <Link to="/">
                    <button type="button" className="btn">Back to Search</button>
                </Link>
                <div className = "movie_title">{title}</div>  
                <img className = "movie_poster" src = {poster} alt = {title}></img>
                <div className = "info_wrapper">
                    <div className = "movie_year">{year}</div>  
                    <div className = "movie_type">{type}</div>  
                    <div className = "movie_released">{released}</div>  
                    <div className = "movie_genre">{genre}</div>  
                    {rating?.map(rate => <div key = {rate.Source}> {rate.Value} on {rate.Source} </div>)}
                </div>
            </div>

        </>
    )
}

export default DetailPage
