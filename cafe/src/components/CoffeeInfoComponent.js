import React, { Component } from 'react';
import { Button, Card, CardImg, CardText, CardBody,  Breadcrumb, BreadcrumbItem,
    Modal, ModalHeader, ModalBody, Label} from 'reactstrap';
import { Link } from 'react-router-dom';
//import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderCoffee({coffee}) {
    return (
        <div className="col-md-5 m-1">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.1) translateY(-50%)'
                }} >
                <Card>
                    <CardImg top src={baseUrl + coffee.image } alt={coffee.name} />
                    <CardBody>
                        <CardText>{coffee.description}</CardText>
                    </CardBody> 
                </Card>
            </FadeTransform>
        </div>       
    );
}

function CoffeeInfo(props) {
    
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    if (props.coffee) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.coffee.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.coffee.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCoffee coffee={props.coffee} />
                    {/* <RenderComments 
                        comments={props.comments}
                        postComment={props.postComment}
                        coffeeId={props.coffee.id}
                    /> */}
                </div>
            </div>
        );
    } 
    return <div />;
}


export default CoffeeInfo;