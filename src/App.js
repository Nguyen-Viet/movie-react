import React, { Component } from 'react';
import './App.css';
import { Button } from 'semantic-ui-react';
import Layout from './HOC/layout/Layout';
import 'semantic-ui-css/semantic.min.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout></Layout>
      </div>
    );
  }
}

export default App;
