var React = require("react");
var Table = require("./table.js");

var MOCK_DATA = [
  {title: "Mocking event", author: "Testing guru", location: "Mockito islands",
   eventStart: "2016-03-31T17:45:21.021Z", eventEnd: "2016-03-31T20:45:21.021Z", additionalInfo: "No SW designers allowed"},
  {title: "Mysterious event", author: "Anonymous", location: "My basement",
   eventStart: "2016-03-31T17:45:21.021Z", eventEnd: "2016-03-31T20:45:21.021Z", additionalInfo: "Bring ice cream"}

];

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Table data={MOCK_DATA} />
        <button>Create new event</button>
      </div>
    );
  }
});
