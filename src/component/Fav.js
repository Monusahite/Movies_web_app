import { Component } from "react";


class Fav extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-3">
                        <ul className="list-group genere-selector">
                            <li className="list-group-item">All Genee</li>
                            <li className="list-group-item">Action</li>
                            <li className="list-group-item">A third item</li>
                            <li className="list-group-item">A fourth item</li>
                            <li className="list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                    <div className="col-9 fav-table">
                    <input type="text" className="form-control" placeholder="search" />
                    <input type="text" className="form-control" />
                    </div>
                </div>
            </div>)
    }
}

export default Fav;