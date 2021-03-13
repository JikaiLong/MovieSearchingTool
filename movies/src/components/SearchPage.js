import {React, useState} from 'react'
import Movie from './Movie'
import './SearchPage.css'


function SearchPage() {

    const [name, setName] = useLocalStorage("name", "");
    const [type, setType] = useLocalStorage("type", "");
    const [year, setYear] = useLocalStorage("year", "");
    const [data, setData] = useLocalStorage("data", []);

    const saveData = (d) =>{
        setData(d.Search)
    }

    function search(){
        if(name === ""){
            alert("you must enter a name")
        }
        else if(type !== "movie" && type !== "series" && type !== "episode" && type !== ""){
            alert("type must be one of movie, series, episode")
        }
        else{
            let link = ""
            if(type === "" && year === ""){
                link = "http://www.omdbapi.com/?i=tt3896198&apikey=e72ace58&s=" + name
            }
            else if (type === "" && year !== ""){
                link = "http://www.omdbapi.com/?i=tt3896198&apikey=e72ace58&s=" + name + "&y=" + year
            }
            else if (type !== "" && year === ""){
                link = "http://www.omdbapi.com/?i=tt3896198&apikey=e72ace58&s=" + name + "&type=" + type
            }
            else{
                link = "http://www.omdbapi.com/?&apikey=e72ace58&s=" + name + "&type=" + type + "&y=" + year
            }
            fetch(link).then(response => response.json()).then(saveData)
        }
    }


    // grab the existing local stroage function 
    function useLocalStorage(key, initialValue) {
        // State to store our value
        // Pass initial state function to useState so logic is only executed once
        const [storedValue, setStoredValue] = useState(() => {
          try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
          } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
          }
        });
      
        // Return a wrapped version of useState's setter function that ...
        // ... persists the new value to localStorage.
        const setValue = value => {
          try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
              value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
          } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
          }
        };
      
        return [storedValue, setValue];
    }

    return (
        <>
            <div className = "box">
                <form>
                    <div className = "user-box">
                    <label>
                        Name:
                    </label>
                        <input type="text" value = {name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className = "user-box">
                    <label>
                        Type:
                    </label>
                        <input type="text" value = {type} onChange ={e => setType(e.target.value)}/>
                    </div>
                    <div className = "user-box">
                    <label>
                        Year:
                    </label>
                        <input type="text" value = {year} onChange = {e => setYear(e.target.value)}/> 
                    </div>
   
                </form>
                <button onClick ={() => search()}>Search</button>
            </div>
            <div className = "movie-list">

            {data?.map(movie => <Movie id = {movie.imdbID} key = {movie.imdbID} title = {movie.Title} poster = {movie.Poster} type = {movie.Type} year = {movie.Year} />)}
                            
            </div>
        </>
    )
}

export default SearchPage
