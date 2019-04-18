import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './Dashboard.css';
import Header from '../Header/Header';
import IncomeList from '../IncomeList/IncomeList';
import ExpenseList from '../ExpenseList/ExpenseList';
import AddBudget from '../AddBudget/AddBudget';

class Dashboard extends Component {
  constructor() {
    super();
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
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/dashboard').then(res => {
      console.log('Get user response: ')
      console.log(res.data.username)
      if (res.data._id) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: res.data.username
        })
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
        
      );
    }
  }
}

export default Dashboard;