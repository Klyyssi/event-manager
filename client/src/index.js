var ReactDOM = require('react-dom');
var React = require('react');
var Table = require("./table.js");
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var hashHistory = require("react-router").hashHistory;


var MOCK_DATA = [
  {title: "Mocking event", author: "Testing guru", location: "Mockito islands",
   eventStart: "2016-03-31T17:45:21.021Z", eventEnd: "2016-03-31T20:45:21.021Z", additionalInfo: "No SW designers allowed"},
  {title: "Mysterious event", author: "Anonymous", location: "My basement",
   eventStart: "2016-03-31T17:45:21.021Z", eventEnd: "2016-03-31T20:45:21.021Z", additionalInfo: "Bring ice cream"}

];

var TableWrapper = React.createClass({
  render: function() {
    return (
      <Table data={MOCK_DATA} />
    );
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={TableWrapper} />
  </Router>,
  document.getElementById('app')
);
