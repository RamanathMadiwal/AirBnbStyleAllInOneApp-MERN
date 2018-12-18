import React, {Component} from 'react';
import Navbar from './components/Navbar'
import Homepage from './components/homepage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Register from "./components/register";
import Login from "./components/login";
import AddRental from './components/addrental'

class App extends Component {
    render() {
        return (
            <Router>
            <div className="bg-image">
                    <Navbar/>
                    <div className="container">
                        <Switch>
                            <Route
                                exact
                                path="/Login"
                                component={Login}
                            />
                            <Route
                                exact
                                path="/Register"
                                component={Register}
                            />
                            <Route
                                exact
                                path="/"
                                component={Homepage}
                            />
                            <Route
                                exact
                                path="/AddRental"
                                component={AddRental}
                            />
                        </Switch>
                    </div>

            </div>
            </Router>
        );
    }
}

export default App;
