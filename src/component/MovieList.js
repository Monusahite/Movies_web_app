import { Component } from "react";
import { movies } from '../movieData'
import  axios from 'axios'

class MovieList extends Component {
    constructor(){
        super();
        this.state={
            hover:"",
            pArr:[1,2,3,4,5],
            movies:[],
        }
    }
    async componentDidMount(){
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=84d9ea6d99b38863f7d41e7d9074ad62")
        console.log(res.data)
        this.setState({
            movies:[...res.data.results]
        })
    }

    handleNext = ()=>{
        this.setState({
            parr:this.state.pArr.push(this.state.pArr.length+1)
        })
    }
    handlePrevious = ()=>{
        if(this.state.pArr.length>1)
        this.setState({
            parr:this.state.pArr.pop()
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
                                    this.state.hover == movieEle.id && (<a href="#" className="btn btn-primary movies-button">Add To Favourites</a>
                                    ) 
                                }

                            </div>
                        </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" onClick={this.handlePrevious} href="#a">Previous</a></li>
                                {this.state.pArr.map((ele)=>(
                                    <li className="page-item" key={ele}><a className="page-link"  href="#a">{ele}</a></li>
                                ))}
                                <li className="page-item"><a className="page-link" onClick={this.handleNext} href="#a">Next</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </>
        )
    }
}

export default MovieList;