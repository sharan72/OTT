import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Moviedetails = () => {
         let [id] = useParams();
    let [movie , setMovie] = useState(null);
    let [error , setError] = useState(null);
    let [pending , setPending] = useState(true);
    

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies/" +id)
            .then((res)=>{ return res.json() })
            .then((data)=>{ 
                console.log(data);
                setMovie(data);
                setPending(false);
                })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);
            })
        } , 1000)
    } , [])
    return ( <div>
        <h1>Movie details component</h1>
        {pending == true && <h1>Loading...</h1> }
        {error && <h1>{error} </h1> }
        {movie && <div className="movie-details">
            <img src= {movie.poster} alt="poster" />
            <h1>movie:{movie.moviename} </h1>
            <h3>Actor:{movie.hero} </h3>
            <p>Director:{movie.director} </p>
            <p>Languages:{movie.languages.join(",")}</p>

            <p>Genre:{movie.genre} </p>
            <h3>Story Line:</h3>
            <p>{movie.synopsis}</p>
            {/* <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

        </div> }
    </div>

      );
}
 
export default Moviedetails;