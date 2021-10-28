import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
        console.log("menu constructor called")
    }

    renderComments(dish) {

        if (dish !== null) {
            return (
                <div key={dish.comments.id}>
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

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>

            </div>
        )
    }
}
export default DishDetail;