import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Home from './components/home';
import AboutMe from './components/aboutMe';
import TodoApp from './components/todoApp';
import NavigationBar from './components/navigationBar';
import Error from './components/error.js';

// import UserInput from './components/userInput';


export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="app">
            <NavigationBar />
            <Switch>
              <Route path="/" exact strict component={Home} />
              <Route path="/about" exact strict component={AboutMe} />
              <Route path="/todoapp" exact strict component={TodoApp} />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}
