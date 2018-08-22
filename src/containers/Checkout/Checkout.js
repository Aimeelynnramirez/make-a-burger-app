import React, { Component } from 'react';
import { Route, Router} from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    componentDidMount() {
        const ingredients = {};
        this.setState({ingredients: ingredients});
    }

    checkoutCancelledHandler = () => {
        this.props.history.replace('/');
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/:id');
    }

    render() {
        return (
            <div>
                 <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
            </div>
        );
    }
}

export default Checkout;