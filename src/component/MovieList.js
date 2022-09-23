import { Component } from "react";
import { movies } from '../movieData'

class MovieList extends Component {
    constructor(){
        super();
        this.state={
            hover:""
        }
    }
    render() {
        let movieArr = movies.results;
        return (
            <>
                <div>
                    <h3 className="text-center"><strong>Trending</strong></h3>
                </div>
                <div className="movies-list">

                    {movieArr.map((movieEle) => (

                        <div className="card movie-card"onMouseEnter={()=>this.setState({hover:movieEle.id})}>
                            <img style={{ height: "40vh", width: "20vw" }} src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} className="card-img-top movie-img" alt="..." />
                            <h5 className="card-title movie-title">{movieEle.original_title}</h5>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                {
                                    this.state.hover == movieEle.id && (<a href="#" className="btn btn-primary movies-button">Add To Favourites</a>
                                    ) 
                                }

                            </div>
                        </div>
                    ))}
                    <div className="pagination_style ">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </>
        )
    }
}

export default MovieList;