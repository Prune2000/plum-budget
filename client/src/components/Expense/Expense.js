import React from 'react';
import { connect } from 'react-redux';

const Expense = ({_id, type, description, price}) => (
    <div>
        <div className="item__description">{description}</div> 
        <div className="right clearfix"> 
            <div className="item__value">{price}</div> 
            <div className="item__delete"> 
            <button className="item__delete--btn">
            <i className="ion-ios-close-outline"></i></button> 
            </div> 
        </div> 
    </div>
);

export default connect()(Expense);