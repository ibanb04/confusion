import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

function RenderComments({ dish }) {
    if (dish != null) {
        return (

            <div key={dish.comments.id} className="col-12 col-md-5 m-1">

                <h1>Comments</h1>
                {dish.comments.map((comment) =>
                    <ul className='list-unstyled'>
                        <li>{comment.comment}</li>
                        <li>-- {comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
                )}
            </div>
        );
    } else {
        return (
            <div></div>
        );

    }
}

function RenderDish({ dish }) {
    if (dish != null)
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

        );
    else
        return (
            <div></div>
        );
}
const DishDetail = (props) => {
    console.log("Dishdetail component render is invoked");
    return (
        <div className="container">
            <div className="row">
                <RenderDish dish={props.dish}></RenderDish>
                <RenderComments dish={props.dish}></RenderComments>
            </div>
        </div >
    )
}

export default DishDetail;