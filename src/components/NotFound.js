import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class NotFound extends Component {

    render() {
        return <main className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <header>
                            <h1>Oops!</h1>
                            <h2>404 Not Found</h2>
                        </header>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-secondary btn-lg">
                                Take Me Home </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    }
}