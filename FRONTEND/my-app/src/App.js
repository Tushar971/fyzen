import './App.css';
import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import AddUser from './components/adduser/adduser';
import ViewUser from './components/viewuser/viewuser';
import 'tachyons';
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: '',
    };
  }

  RouteChange = (route) => {
    this.setState({ route });
  };

  render() {
    if (this.state.route === '') {
      return (
        <div className="App">
          <Navigation RouteChange = {this.RouteChange}/>
        </div>
      );
    } else if (this.state.route === 'AddUser') {
      return (
        <div className="App">
          <Navigation RouteChange = {this.RouteChange}/>
          <AddUser />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navigation RouteChange = {this.RouteChange}/>
          <ViewUser />
        </div>
      );
    }
  }
}

export default App;
