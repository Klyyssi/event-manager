var React = require("react");

module.exports = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.event.title}</td>
        <td>{this.props.event.author}</td>
        <td>{this.props.event.location}</td>
        <td>{this.props.event.eventStart}</td>
        <td>{this.props.event.eventEnd}</td>
        <td>{this.props.event.additionalInfo}</td>
      </tr>
    );
  }
});
