var React = require("react");
var EventRow = require("./event_row.js");

module.exports = React.createClass({
  render: function() {

    var rows = this.props.data.map(function(event) {
      return <EventRow event={event} key={event.title} />;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Event Title</th>
            <th>Author</th>
            <th>Location</th>
            <th>Starts at</th>
            <th>Ends at</th>
            <th>Additional info</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      );
  }
});
