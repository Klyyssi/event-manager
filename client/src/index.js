var ReactDOM = require('react-dom');
var React = require('react');
var Table = require("./table.js");
var Router = require("react-router");

var MOCK_DATA = [
  {title: "Mocking event", author: "Testing guru", location: "Mockito islands",
   eventStart: "2016-03-31T17:45:21.021Z", eventEnd: "2016-03-31T20:45:21.021Z", additionalInfo: "No SW designers allowed"}

];

ReactDOM.render(
  <Table data={MOCK_DATA} />,
  document.getElementById('app')
);
