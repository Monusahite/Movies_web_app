import { Component } from "react";
// import { movies } from '../movieData';

class Fav extends Component {
     constructor(){
        super();
        this.state ={
            genres:[],
            currgenre:"All genres",
            movies:[],
        }
     }

    componentDidMount(){
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
        let data = JSON.parse(localStorage.getItem("movies-app") || '[]'); //movies
        let tempArr = [];
        tempArr.push("All genres")
        data.map((movieObj)=>{
            if(!tempArr.includes(genreIds[movieObj.genre_ids[0]])){
                tempArr.push(genreIds[movieObj.genre_ids[0]])
            }
        })
        
        this.setState({
            movies:[...data],
            // movies2:[...data],
            genres:[...tempArr]
        })
        
    }
    handleChangeGenre =(genre)=>{
        this.setState({
            currgenre:genre,
        },this.filterMovies)
    }
    filterMovies =()=>{
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
        let data = JSON.parse(localStorage.getItem("movies-app") || '[]'); //movies
        if(this.state.currgenre == "All genres"){
            this.setState({
                movies:[...data],
            })
        }
        else{
            let filterMovies = data.filter((movieObj)=>(
                    genreIds[movieObj.genre_ids[0]] == this.state.currgenre
            ))
            this.setState({
                movies:[...filterMovies],
            })
        }
    }

    render() {
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western" }
        return (
            
            <div className="container text-center">
                <div className="row">
                    <div className="col-3">
                        <ul className="list-group genere-selector">
                            {this.state.genres.map((genre) => (
                                this.state.currgenre == genre ?(<li className="list-group-item active genre">{genre}</li>):(<li onClick={()=>this.handleChangeGenre(genre)}className="list-group-item genre">{genre}</li>)
                            ))}
                        </ul>
                    </div>
                    <div className="col-9 fav-table">
                        <div className="row">
                            <input type="text" className="form-control col" placeholder="search" />
                            <input type="text" className="form-control col" />

                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Popularity</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.movies.map((movieEle) => (
                                    <tr>

                                        <td><img style={{ width: '10rem', height: '6rem', borderRadius: "1rem" }} src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} />
                                            <p> <strong>{movieEle.original_title}</strong></p>
                                        </td>
                                        <td>{genreIds[movieEle.genre_ids[0]]}</td>
                                        <td>{movieEle.popularity}</td>
                                        <td>{movieEle.vote_average}</td>
                                        <td><a type="button" class="btn btn-danger">Delete</a></td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
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
            </div>)
    }
}

export default Fav;