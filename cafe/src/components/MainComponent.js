import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './HomeComponent';

const mapStateToProps = state => {
    return {
    
    };
};

class Main extends Component {
    

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                   
                    <Redirect to='/home' />
                </Switch>
. . .
            </div>
        );

    }
}

export default withRouter(connect(mapStateToProps)(Main));