var React = require("react");

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Create new event</h1>
        <form className="new-event">
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Author" />
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Starts at" />
            <input type="text" placeholder="Ends at" />
            <input type="text" placeholder="Additional info" />
            <button>Create</button>
        </form>
      </div>
    )
  }
});
