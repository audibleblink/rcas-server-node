/** @jsx React.DOM */

var React = require('react'),
    MemberItem = require('./MemberItem')

var MemberList = React.createClass({

  render: function() {

    var memberItems = this.props.items.map(function(item) {
      return (
        <MemberItem key={item.key} 
          name={item.gamertag} 
          gamerScore={item.gamerScore} 
          image={item.imageUrl} 
          onGamerDelete={this.props.onGamerDelete}/>
        )
    }.bind(this))

    return (
      <ul className="list-group container">
        {memberItems}
      </ul>
    )
  }

})

module.exports = MemberList
