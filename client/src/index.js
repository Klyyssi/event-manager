var ReactDOM = require('react-dom');
var React = require('react');
var MainView = require("./main.js");
var NewEvent = require("./new_event.js");
var Router = require("react-router").Router;
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
var browserHistory = Router.browserHistory;

ReactDOM.render(
  <Router history={browserHistory}>
    <IndexRoute component={MainView} />
    <Route path="/new" component={NewEvent} />
  </Router>,
  document.getElementById('app')
);
