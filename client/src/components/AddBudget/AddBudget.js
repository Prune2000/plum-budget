import React from 'react';
import { connect } from 'react-redux';
import Form from '../Form/Form';
import { addIncome } from '../../actions/incomes';
import { addExpense } from '../../actions/expenses';

const AddBudget = (props) => (
    <div className="bottom">
            <div className="add">
                <Form 
                    onSubmitBudget={(budget) => {
                        if (budget.type === 'inc') {
                            props.dispatch(addIncome(budget));
                        }
                        else {
                            console.log(budget);
                            props.dispatch(addExpense(budget));
                        };
                    }}
                />
            </div>
        </div>
);

export default connect()(AddBudget);