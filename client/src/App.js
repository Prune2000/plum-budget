import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './models/Header/Header';
import Form from './models/Form/Form';
class App extends Component {

  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  };

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

render() {
    return (
      <div className="App">
        <Header />
        
          <Form />
       
      </div>
    );
  }
}
export default App;