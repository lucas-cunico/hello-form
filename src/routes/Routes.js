import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './../components/Home';
import Form from './../components/Form';
import Confirm from './../components/Confirm';
import NotFound from './../components/NotFound';

class Routes extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/form" component={Form}/>
                    <Route exact path="/confirm" component={Confirm}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default Routes;
