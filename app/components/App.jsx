import React from 'react';
import Peers from './Peers';
import JQuery from 'jQuery';

var $ = require('jQuery');



// tutorial2.js
// tutorial5.js


var Fnpm = React.createClass({
  render: function() {
    return (
      <div className="fnmp">
        <h1>fnpm peer viewer</h1>
        <Peers peers={this.state.data}/>
      </div>
    );
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadPeersFromServer();
    setInterval(this.loadPeersFromServer, this.props.pollInterval);
  },
  loadPeersFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log("successful xmlhttprequest.");
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
});
React.render(<Fnpm url="http://localhost:3000/getpeerinfo" pollInterval={5000} />, document.body);
