import React from 'react'
import ReactDOM from 'react-dom'
//import App from './App'
import { BasicExample } from './basic-example'
import './index.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Debug = ({ match, store }) => (
  <div>
    <h2>Debug</h2>
    <p>
      <pre>
        <code>
          { JSON.stringify(match, null, 2) }
        </code>
      </pre>
    </p>
  </div>
)

const Root = () => (
    <Router>
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/item/1">item 1</Link>
        </li>
        <li>
          <Link to="/item/2">item 2</Link>
        </li>
      </ul>
      <hr/>
      <Sidebar />
      <div style={{float: 'right'}}>
        <Route exact path="/" component={Debug} />
        <Route path="/about" component={Debug} />
        <Route path="/item/:id" component={Debug} />
      </div>
      <hr/>

    </div>

    </Router>
)

const Sidebar = () => (
  <Router>
    <div style={{border: 'solid 1px black', float: 'left'}}>
      <h3>Sidebar</h3>
      <div>
        <Route path="/item/:id" component={Debug} />
      </div>
    </div>
  </Router>
)

ReactDOM.render(
  <BasicExample /> /* <Root /> */,
  document.getElementById('root')
);
