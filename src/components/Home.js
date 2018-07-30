import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <main className="height-fix d-flex justify-content-center align-items-center">
                <Link to="/form" className="btn btn-lg btn-secondary">Cadastro</Link>
            </main>
        );
    }
}

export default Home;
