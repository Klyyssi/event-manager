var React = require("react");
var moment = require("moment");
var dateFormat = "DD.MM.YYYY";

module.exports = React.createClass({
  getInitialState: function() {
    return {title: "", author: "", location: "", datestart: moment().add(1, "days").format(dateFormat),
            timestart: "12:00", dateend: moment().add(1, "days").format(dateFormat), timeend: "16:00",
            addinfo: ""};
  },

  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },

  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },

  handleLocationChange: function(e) {
    this.setState({location: e.target.value});
  },

  handleDateStartChange: function(e) {
    this.setState({datestart: e.target.value});
  },

  handleTimeStartChange: function(e) {
    this.setState({ timestart: e.target.value});
  },

  handleDateEndChange: function(e) {
    this.setState({dateend: e.target.value});
  },

  handleTimeEndChange: function(e) {
    this.setState({timeend: e.target.value});
  },

  handleAdditionalInfoChange: function(e) {
    this.setState({addinfo: e.target.value});
  },

  onSubmit: function() {

  },

  render: function() {
    return (
      <div>
        <h1>Create new event</h1>
        <form className="new-event">
          <input type="text" onChange={this.handleTitleChange} value={this.state.title} placeholder="Title" />
          <input type="text" onChange={this.handleAuthorChange} value={this.state.author} placeholder="Author" />
          <input type="text" onChange={this.handleLocationChange} value={this.state.location} placeholder="Location" />
          <input type="text" onChange={this.handleDateStartChange} value={this.state.datestart} placeholder="Date start" />
          <input type="text" onChange={this.handleTimeStartChange} value={this.state.timestart} placeholder="Time start" />
          <input type="text" onChange={this.handleDateEndChange} value={this.state.dateend} placeholder="Date end" />
          <input type="text" onChange={this.handleTimeEndChange} value={this.state.timeend} placeholder="Time end" />
          <input type="text" onChange={this.handleAdditionalInfoChange} value={this.state.addinfo} placeholder="Additional info" />
        <button>Create</button>
      </form>
      </div>
    )
  }
});
