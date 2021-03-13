import React, {useState,useEffect} from 'react'

function DetailPage(props) {
    const [title, setTitle] = useState("")
    
    const saveData = (d) =>{
        setTitle(d.Title)
    }

    useEffect(() => {
        let link = "http://www.omdbapi.com/?&apikey=e72ace58&i=" + props.id
        fetch(link).then(response => response.json()).then(saveData)
      });

    return (
        <>
            <div className = "movie_wrapper">
                <div className = "movie_title">{title}</div>  
                <div>I just want to fly like a bird</div>
            </div>
        </>
    )
}

export default DetailPage
