import { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Navbar extends Component {
    constructor(){
        super();
        this.state={
            currText:"",
        }
    }
    async searchMovie(title){
        let temp =[];
        const res= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=84d9ea6d99b38863f7d41e7d9074ad62&language=en-US&page=1`);
        
        temp = res.data.results.filter((movieObj)=>{
            let title2 = movieObj.original_title.toLowerCase();
            return title2.includes(title.toLowerCase())
        })
        this.showModal(temp)
    }
    showModal =(temp)=>{
        const ModalCont = document.querySelector(".modal");

            if(temp.length!=0){
                    console.log(temp[0].backdrop_path);

                    ModalCont.innerHTML=`<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="https://image.tmdb.org/t/p/original${temp[0].backdrop_path}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${temp[0].title}</h5>
                      <p class="card-text">${temp[0].overview}</p>
                      <h5>Rating:
                      <p class="card-text ${this.getcolor(temp[0].vote_average)}">${temp[0].vote_average}</p>
                      </h5>
                      <a href="#" class="btn btn-primary">Add Favourites</a>
                    </div>
                  </div>`;
                  
                  ModalCont.style.display="flex";
                }
                else{
                    ModalCont.innerHTML=`<h1>Not Found</h1>`;
                        ModalCont.style.display="flex";
                    }
                }
                handleCurrText=(textValue)=>{
                    const ModalCont = document.querySelector(".modal");
                    this.setState({
                        currText:textValue        
                    })
                    if(textValue == ""){
                        ModalCont.style.display="none";
                    }
                }  
                handleSearch =()=>{ 
                    if(this.state.currText != "")
                    this.searchMovie(this.state.currText);
                }
                getcolor = (rating)=>{
                    if(rating>=8)
                    return "green";
                    else if(rating>5)
                    return "orange";
                    else
                    return "red";
                }
                render() {
                    return (
            <nav className="navbar navbar-expand-lg nav-color">
                <div className=" navbar container-fluid">
                    <div className='nav-link'>
                    <Link to="/" style={{ textDecoration: "none" }}> <h1 className='btn btn-outline-primary homebtn'>Home</h1></Link>
                    <Link to="/favourites" style={{ textDecoration: "none" }}> <h2 style={{ marginLeft: "3rem"}} className='btn btn-outline-info homebtn' >Favourites</h2></Link>
                    </div>
                    <div class="nav-search">
                       <input type="text" class="form-control" placeholder="Search" value={this.state.currText} onChange={(e)=>this.handleCurrText(e.target.value)}/>
                        <button className="btn btn-outline-success" type="submit" onClick={this.handleSearch}>Search</button>
                    </div>
                </div>
                <div className='modal'>
                
                </div>
                {/* <div style={{display:"flex",color:"blue" ,padding:"0.5rem"}}>
               
               
            </div>  */}
            </nav>
        )
    }
}

export default Navbar;
