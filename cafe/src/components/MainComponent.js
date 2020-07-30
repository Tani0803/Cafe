import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import CoffeeInfo from './CoffeeInfoComponent';
import { fetchCoffee } from '../redux/ActionCreators';
import Directory from './DirectoryComponent';

const mapStateToProps = state => {
    return {
        coffee: state.coffee
    };
};

const mapDispatchToProps = {
  //  postComment: (campsiteId, rating, author, text) => (postComment(campsiteId, rating, author, text)),
    fetchCoffee: () => (fetchCoffee())

    
};

class Main extends Component {
    componentDidMount() {
        this.props.fetchCoffee();
       // this.props.fetchComments();
      //  this.props.fetchPromotions();
      // this.props.fetchPartners();
    }

    render() {
        const HomePage = () => {
            return (
                <Home 
                    coffee={this.props.coffee.coffee.filter(coffee => coffee.featured)[0]}
                    coffeeLoading={this.props.coffee.isLoading}
                    coffeeErrMess={this.props.coffee.errMess}
                />
            );
        }

        const CoffeeWithId = ({match}) => {
            return (
                <CoffeeInfo 
                    coffee={this.props.coffee.coffee.filter(coffee => coffee.id === +match.params.coffeeId)[0]}
                    isLoading={this.props.coffee.isLoading}
                    errMess={this.props.coffee.errMess}
                   // comments={this.props.comments.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                   // commentsErrMess={this.props.comments.errMess}
                   // postComment={this.props.postComment}
                />  
            );
        };

        return (
            
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory coffee={this.props.coffee} />} />
                    <Route path='/directory/:coffeeId' component={CoffeeWithId} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));