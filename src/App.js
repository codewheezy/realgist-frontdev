import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import './App.scss'; 

// pages 
import Container  from './pages/container';
import Admin from './pages/admin-login';
import CreateBlog from './pages/create-blog';

// components 
import Header from './components/header';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <React.StrictMode>
          <Switch>
            <Route exact path="/admin-login" component={Admin} />
            <Route exact path="/create-blog" component={CreateBlog} />
            <Route path="/" component={Container} />
          </Switch>
        </React.StrictMode>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);