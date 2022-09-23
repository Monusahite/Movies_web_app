import { Component } from "react";
// import {movies} from '../movieData'
import axios from 'axios'

class Banner extends Component {
    constructor(){
        super();
        this.state = {
            movie:"",

        }
    }
    async componentDidMount(){
    
        const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=84d9ea6d99b38863f7d41e7d9074ad62&language=en-US&page=1')
        this.setState({
            movie:res.data.results[Math.floor(Math.random()*10)]
        })
    }
    render() {
         let movies = this.state.movie;
        return (
            <div className="card banner-card">
                <img src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`} className="card-img-top banner-img" alt="..." />
                    <h1 className="card-title banner-title">{movies.original_title}</h1>
                    <p className="card-text banner-text">{movies.overview}</p>
            </div>
        )
    }
}

export default Banner;