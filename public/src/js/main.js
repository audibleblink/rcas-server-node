/** @jsx React.DOM */

var React = require('react'),
    Roster  = require('./components/Roster')

// Render the 'Roster' component inside of the #app div
React.renderComponent(
  <Roster />,
  document.getElementById('app')
)


