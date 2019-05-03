import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import pages
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Post from './components/PostFunc/Post';
import Form from './containers/addWaifu/listForm';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts/:post_id" component={Post} />
            <Route path='/addform' component={Form} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
