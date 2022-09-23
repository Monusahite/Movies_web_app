import { Component } from "react";
// import { movies } from '../movieData';

class Fav extends Component {
    constructor() {
        super();
        this.state = {
            genres: [],
            currgenre: "All genres",
            movies: [],
            movies2: [],
            currText: "",
        }
    }

    componentDidMount() {
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western" }
        let data = JSON.parse(localStorage.getItem("movies-app") || '[]'); //movies
        let tempArr = [];
        tempArr.push("All genres")
        data.map((movieObj) => {
            if (!tempArr.includes(genreIds[movieObj.genre_ids[0]])) {
                tempArr.push(genreIds[movieObj.genre_ids[0]])
            }
        })

        this.setState({
            movies: [...data],
            movies2: [...data],
            genres: [...tempArr]
        })

    }
    handleChangeGenre = (genre) => {
        this.setState({
            currgenre: genre,
        }, this.filterMovies)
    }
    filterMovies = () => {
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western" }
        let data = JSON.parse(localStorage.getItem("movies-app") || '[]'); //movies
        if (this.state.currgenre == "All genres") {
            this.setState({
                movies: [...data],
                movies2: [...data],
            })
        }
        else {
            let filterMovies = data.filter((movieObj) => (
                genreIds[movieObj.genre_ids[0]] == this.state.currgenre
            ))
            this.setState({
                movies: [...filterMovies],
                movies2: [...filterMovies],
            })
        }
    }
    searchMovies = () => {
        if (this.state.currText != "") {
            let filterArr = this.state.movies2.filter((movieObj) => {
                let title = movieObj.original_title.toLowerCase();
                return title.includes(this.state.currText.toLowerCase());
            })
            this.setState({
                movies: [...filterArr],
            })
        }
        else {
            let data = JSON.parse(localStorage.getItem('movies-app') || '[]')
            this.setState({
                movies: [...data],
            })
        }

    }
    handleCurrText = (inputValue) => {
        this.setState({
            currText: inputValue,
        }, this.searchMovies)
    }
    sortPopularityDesc =()=>{
        let temp =this.state.movies.map((movieObj)=>movieObj);
        console.log(temp)
        temp.sort(function(objA,objB){
            return objA.popularity - objB.popularity;
        })
        this.setState({
            movies:[...temp],
            movies2:[...temp]
        })
    }
    sortPopularityInc =()=>{
        let temp =this.state.movies.map((movieObj)=>movieObj);
        console.log(temp)
        temp.sort(function(objA,objB){
            return objB.popularity - objA.popularity;
        })
        this.setState({
            movies:[...temp],
            movies2:[...temp]
        })
    }
    sortRatingInc =()=>{
        let temp =this.state.movies.map((movieObj)=>movieObj);
        console.log(temp)
        temp.sort(function(objA,objB){
            return objB.vote_average - objA.vote_average;
        })
        this.setState({
            movies:[...temp],
            movies2:[...temp]
        })
       
    }
    sortRatingDesc =()=>{
        let temp =this.state.movies.map((movieObj)=>movieObj);
        console.log(temp)
        temp.sort(function(objA,objB){
            return objA.vote_average - objB.vote_average;
        })
        this.setState({
            movies:[...temp],
            movies2:[...temp]
        })
       
    }
   
    render() {
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western" }

        return (

            <div className="container text-center">
                <div className="row">
                    <div className="col-3">
                        <ul className="list-group genere-selector">
                            {this.state.genres.map((genre) => (
                                this.state.currgenre == genre ? (<li className="list-group-item active genre">{genre}</li>) : (<li onClick={() => this.handleChangeGenre(genre)} className="list-group-item genre">{genre}</li>)
                            ))}
                        </ul>
                    </div>
                    <div className="col-9 fav-table">
                        <div className="row">
                            <input type="text text-center" value={this.state.currText} onChange={(e) => this.handleCurrText(e.target.value)} className="form-control col" placeholder="search" />
                            <input type="text" className="form-control col" />

                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">
                                        <i class="fa fa-sort-up" onClick={this.sortPopularityInc}></i>
                                        Popularity
                                        <i class="fa fa-sort-down" onClick={this.sortPopularityDesc}></i>
                                    </th>
                                    <th scope="col">
                                       
                                        <i class="fa fa-sort-up" onClick={this.sortRatingInc}></i>
                                        Rating
                                        <i class="fa fa-sort-down" onClick={this.sortRatingDesc} ></i>
                                        
                                    </th>
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