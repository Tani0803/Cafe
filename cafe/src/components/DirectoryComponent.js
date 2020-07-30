import React  from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderDirectoryItem({coffee, onClick}) {
    return (
        <Card>
            <Link to={`/directory/${coffee.id}`}>
                <CardImg width="100%" src={baseUrl + coffee.image} alt={coffee.name} />
                <CardImgOverlay>
                    <CardTitle>{coffee.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.coffee.coffee.map(coffee => {
        return (
            <div key={coffee.id} className="col-md-5 m-1">
                <RenderDirectoryItem coffee={coffee} />
            </div>
        );
    }); 

    if (props.coffee.isLoading) {
        return (
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    
    if (props.coffee.errMess) {
        return (
            <div className="container">
                <div className="row"> 
                    <div className="col">
                        <h4>{props.coffee.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    } 

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;