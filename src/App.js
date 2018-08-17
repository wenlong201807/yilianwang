import React, { Component } from 'react';

import Home from './components/Home/Home.js';
import Test from './components/Test.js';

import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="header">
            我是头部
            <h3>暂定使用公共宽高**1000x550右浮动</h3>
          </header>
          <main className="main">
            <ul
              className="main_nav"
              style={{
                float: 'left',
                width: 200,
                height: 370,
                background: 'pink'
              }}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/test">Test</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <div className="main-right">
              <Route exact path="/" component={Home} />
              <Route path="/test" component={Test} />
              <Route path="/topics" component={Topics} />
            </div>
          </main>
          <footer className="footer">我是脚部部</footer>
        </div>
      </Router>
    );
  }
}

export default App;
