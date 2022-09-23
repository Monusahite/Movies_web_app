import { Component } from "react";
import { movies } from '../movieData'

class MovieList extends Component {
    render() {
        let movieArr = movies.results;
        return (
            <>
                <div>
                    <h3 className="text-center"><strong>Trending</strong></h3>
                </div>
                <div className="movies-list">

                    {movieArr.map((ele) => (

                        <div className="card movie-card">
                            <img style={{ height: "40vh", width: "20vw" }} src={`https://image.tmdb.org/t/p/original${ele.backdrop_path}`} className="card-img-top movie-img" alt="..." />
                            <h5 className="card-title movie-title">{ele.original_title}</h5>

                            <div style={{display:'flex',justifyContent:'center'}}>
                                <a href="#" className="btn btn-primary movies-button">Add To Favourites</a>

                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

export default MovieList;