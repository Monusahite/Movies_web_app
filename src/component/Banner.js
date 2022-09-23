import { Component } from "react";

class Banner extends Component {
    render() {
        return (
            <div className="card">
                <img src="https://static.billboard.com/files/media/Camila-Cabello-oct-3-2019-billboard-1548-compressed.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        )
    }
}

export default Banner;