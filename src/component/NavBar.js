import { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            currText: "",
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg nav-color">
                <div className='nav-link'>
                    <Link to="/" style={{ textDecoration: "none" }}> <h1 className='btn btn-outline-primary homebtn'>Home</h1></Link>
                    <Link to="/favourites" style={{ textDecoration: "none" }}> <h2 style={{ marginLeft: "3rem" }} className='btn btn-outline-info homebtn' >Favourites</h2></Link>
                </div>
    
            </nav>
        )
    }
}

export default Navbar;
