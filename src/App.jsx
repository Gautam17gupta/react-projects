import {useDispatch,useSelector} from "react-redux"
import './App.css'
import { fetchmovies } from "./redux/slices/MoviesSlice";
import Movieslist from "./assets/components/movieslist";
import { useEffect } from "react";

function App() {
 const dispatch=useDispatch();
 const stateofmovies=useSelector((state)=>state);
 console.log("state",stateofmovies)

 useEffect(()=>{dispatch(fetchmovies())},[])
//  console.log("state",stateofmovies)
 if(stateofmovies.isloading){
  return(<h1>loading....</h1>)
 }

 

  return (
    <div className="app text-center"  >
      <Movieslist/>
    </div>
  )
}

export default App
