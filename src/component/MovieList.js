import { Component } from "react";
import { movies } from '../movieData'
import  axios from 'axios'

class MovieList extends Component {
    constructor(){
        super();
        this.state={
            hover:"",
            pArr:[1],
            movies:[],
            currPage:1,
            favourites:[],
        }
    }
    async componentDidMount(){
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=84d9ea6d99b38863f7d41e7d9074ad62&language=en-US&page=${this.state.currPage}`)
        this.setState({
            movies:[...res.data.results]
        })
    }
    async changeMovies(){
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=84d9ea6d99b38863f7d41e7d9074ad62&language=en-US&page=${this.state.currPage}`)
        this.setState({
            movies:[...res.data.results]
        })

    }

    handlePrevious = ()=>{
        if(this.state.pArr.length>1)
        this.setState({
            parr:this.state.pArr.pop(),
            currPage:this.state.currPage-1,
        },this.changeMovies)
    }
    handlePage = (page)=>{
       this.setState({
        currPage:page
       },this.changeMovies)
    }
    handleNext = ()=>{
        this.setState({
            parr:this.state.pArr.push(this.state.pArr.length+1),
            currPage:this.state.currPage+1,
        },this.changeMovies)
    }

    handleFavourites = (movieObj)=>{
        let oldData = JSON.parse(localStorage.getItem('movies-app') || '[]')
        if(this.state.favourites.includes(movieObj.id)){
            oldData = oldData.filter((movie)=>movie.id!=movieObj.id)
        }else{
            oldData.push(movieObj)
        }
        localStorage.setItem("movies-app",JSON.stringify(oldData));
        this.handleFavouritesState();
    }

    handleFavouritesState = ()=>{
        let oldData = JSON.parse(localStorage.getItem('movies-app')|| '[]')
        let temp = oldData.map((movie)=>movie.id);
        this.setState({
            favourites:[...temp]
        })
    }

    render() {
        let movieArr = movies.results;
        return (
            <>
                <div>
                    <h3 className="text-center"><strong>Trending</strong></h3>
                </div>
                <div className="movies-list">

                    {this.state.movies.map((movieEle) => (

                        <div className="card movie-card"onMouseEnter={()=>this.setState({hover:movieEle.id})}>
                            <img style={{ height: "40vh", width: "20vw" }} src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} className="card-img-top movie-img" alt="..." />
                            <h5 className="card-title movie-title">{movieEle.original_title}</h5>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                {
                                    this.state.hover == movieEle.id && (<a className="btn btn-primary movies-button" onClick={()=>this.handleFavourites(movieEle)}>
                                       
                                       {this.state.favourites.includes(movieEle.id)?'Remove from Favourites':'Add To Favourites'}
                                       
                                        </a>
                                    ) 
                                }

                            </div>
                        </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" onClick={this.handlePrevious} >Previous</a></li>
                                {this.state.pArr.map((ele)=>(
                                    <li className="page-item" key={ele} onClick={() => this.handlePage(ele)}><a className="page-link" >{ele}</a></li>
                                ))}
                                <li className="page-item"><a className="page-link" onClick={this.handleNext} >Next</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </>
        )
    }
}

export default MovieList;