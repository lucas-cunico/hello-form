import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactTooltip from "react-tooltip";


class Home extends Component {
    render() {
        return (
            <main className="height-fix d-flex justify-content-center align-items-center">
                <span data-tip data-for="happyFace">
                <Link to="/form"  className="btn btn-lg btn-secondary">Cadastro</Link>
                </span>
                <ReactTooltip id="happyFace" type="error">
                  <span>Show happy face eeee</span>
                </ReactTooltip>
            </main>
        );
    }
}

export default Home;
