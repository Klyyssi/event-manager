var React = require("react");
var Table = require("./table.js");
var Link = require("react-router").Link;
var API = require("./config/api.js");
var $ = require("jquery");

var MOCK_DATA = [
  {title: "Mocking event", author: "Testing guru", location: "Mockito islands",
   eventStart: "2016-03-31T17:45:21.021Z", eventEnd: "2016-03-31T20:45:21.021Z", additionalInfo: "No SW designers allowed"},
  {title: "Mysterious event", author: "Anonymous", location: "My basement",
   eventStart: "2016-03-31T17:45:21.021Z", eventEnd: "2016-03-31T20:45:21.021Z", additionalInfo: "Bring ice cream"}

];

module.exports = React.createClass({
  loadEventsFromServer : function() {
    $.ajax({
      url: API.url,
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(API.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return { data: [] };
  },

  componentDidMount: function() {
    this.loadEventsFromServer();
  },

  render: function() {
    return (
      <div>
        <Table data={this.state.data}/>
        <Link to="/new">Create new event</Link>
      </div>
    );
  }
});
