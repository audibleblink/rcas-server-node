/** @jsx React.DOM */

var React = require('react')

var MemberItem = React.createClass({

  render: function() {
    return (
      <li className="list-group-item clearfix">
        <img className="pull-right thumb" src={this.props.image}/>
        <h4>{this.props.name}</h4>
        <span>{this.props.gamerScore}</span>
      </li>
    )
  }

})

module.exports = MemberItem
