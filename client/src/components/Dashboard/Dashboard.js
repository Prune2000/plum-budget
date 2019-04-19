import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import './Dashboard.css';
import Header from '../Header/Header';
import IncomeList from '../IncomeList/IncomeList';
import ExpenseList from '../ExpenseList/ExpenseList';
import AddBudget from '../AddBudget/AddBudget';

import { connect } from 'react-redux';
import getAppStore from '../../store/store';
import { getIncomes } from '../../actions/incomes';
import { getExpenses } from '../../actions/expenses';

const store = getAppStore();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false,
      username: null,
      redirectTo: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    store.dispatch(getIncomes());
    store.dispatch(getExpenses());
    this.getUser();
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/dashboard').then(res => {
      console.log('Get user response: ')
      console.log(res.data.username)
      if (res.data._id) {
        this.setState({
          loggedIn: true,
          username: res.data.username
        });

      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null,
          redirectTo: '/'
        })
      }
    })
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <Provider store={store}>
        <div className="App">
          <Header />
          
            <AddBudget />

            <div className="container clearfix">
              <div className="income">
                <h2 className="income__title">Incomes</h2>
                                
                <IncomeList />

              </div>
            

              <div className="expenses">
                <h2 className="expenses__title">Expenses</h2>

                <ExpenseList />
              
              </div>
            </div>
        </div>
        </Provider>
        
      );
    }
  }
}

export default connect()(Dashboard);