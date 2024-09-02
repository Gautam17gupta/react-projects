export default function MovieItem({image,name,plot,rating,link,trailer}){
    return(
        <div className="w-[350px] h-[520px] flex-col items-center bg-white shadow-md">
            <div className="w-[350px] h-[310px]  flex justify-center" >
                <a href={link}>
                <img className="self-center " src={image} alt="poster" />
                </a>
                </div>
            <div className="font-bold"><h1>{name}</h1></div>
            <div className="text-center font-style:italic"><p>{plot}</p></div>
            <div>
                <a className=" hover:text-green-600" href={trailer}>watch trailer</a>
            </div>
            <div className="">Rating : <span>{rating}</span></div>
        </div>
    )
} 