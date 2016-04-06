var React = require("react");
var $ = require("jquery");

module.exports = React.createClass({
  handleDelete: function() {
    $.ajax({
      url: this.props.url,
      type: 'DELETE',
      success: function() {
        window.location.replace("/");
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    return (
      <button onClick={this.handleDelete}>Delete</button>
    );
  }
});
