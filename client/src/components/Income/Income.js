import React from 'react';
import { connect } from 'react-redux';
import trash from '../../img/trash.svg';
import { removeIncome } from '../../actions/incomes';

const Income = ({_id, type, description, price, dispatch}) => (
    <div key={_id}>
        <div className="item__description">{description}</div> 
        <div className="right clearfix">  
            <div className="item__delete"> 
                <button className="item__delete--btn" onClick={() => {
                    dispatch(removeIncome({_id}))
                }}>
                    <img src={trash} alt="trash can"></img>
                </button> 
            </div> 
            <div className="item__value">{price}</div>
        </div> 
    </div>
);

export default connect()(Income);