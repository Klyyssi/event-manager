var React = require("react");
var moment = require("moment");

module.exports = React.createClass({
  render: function() {
    var timeFormat = "DD.MM.YYYY, h:mm:ss";
    return (
      <tr>
        <td>{this.props.event.title}</td>
        <td>{this.props.event.author}</td>
        <td>{this.props.event.location}</td>
        <td>{moment(this.props.event.eventStart).format(timeFormat)}</td>
        <td>{moment(this.props.event.eventEnd).format(timeFormat)}</td>
        <td>{this.props.event.additionalInfo}</td>
      </tr>
    );
  }
});
