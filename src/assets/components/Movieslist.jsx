import { useSelector } from "react-redux"
import MovieItem from "./MovieItem"
import { useState } from "react"

export default function Movieslist(){

    const [searchkeyword,Setsearchkeyword]=useState("");
    const [Moviesfound,SetMoviesfound]=useState(true)
    const stateofmovies=useSelector((state)=>state)

    return(
        <div className="bg-zinc-100">
        <div className="pt-6">
            <input type="text" className="w-[600px] h-[30px] shadow-lg" placeholder="Search movies here" onChange={(e)=>Setsearchkeyword(e.target.value)}/>
        </div>

       <div className="flex flex-row flex-wrap gap-5 justify-center pt-6">
        
        {console.log(stateofmovies, 'we are inside of movieslist')}
        {stateofmovies?.data?.map((movie,index)=>{
            // SetMoviesfound(false)
            if(movie.title.toLowerCase().includes(searchkeyword.toLowerCase()))
                { 
                    console.log(movie.title,'filtered')
                    // SetMoviesfound(true)
                    return (
                      <MovieItem
                       key={index}
                       image={movie.poster}
                       name={movie.title}
                       plot={movie.plot}
                       rating={movie.rating}
                       link={movie.website}
                       trailer={movie.trailer}
                       />)
                    }
            }
        )}
        {(!Moviesfound)?<h1>no movies found</h1>:<h1></h1>}
       </div>
       </div>
    )
}