import MoviesData from "../MoviesData";
import MovieCard from "./MovieCard";

const Movies = () => {
    return(
        <>
        <h1 className="text-center my-3 text-4xl font-semibold">Top Movies for watch</h1>
            <div className="h-[75vh] w-[100vw] flex gap-5 justify-center items-center">
            {
                MoviesData.map((val, i) => {
                    let rating = parseInt(val.rating[0])
                    let star = ""
                    while(rating > 0){
                        star+="⭐"
                        rating--;
                    }
                  return(

                        <MovieCard movie={val} star={star}/>
                    )
                })
            }
            </div>
       </>
    );
}
export default Movies;