import { Component } from "react";

class Banner extends Component {
    render() {
        return (
            <div className="card banner-card">
                <img src="https://static.billboard.com/files/media/Camila-Cabello-oct-3-2019-billboard-1548-compressed.jpg" className="card-img-top banner-img" alt="..." />
                    <h1 className="card-title banner-title">Camila Cabbelo</h1>
                    <p className="card-text banner-text">Most Beautiful Girl have you ever seen</p>
            </div>
        )
    }
}

export default Banner;