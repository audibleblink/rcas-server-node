/** @jsx React.DOM */

var React = require('react')

var MemberItem = React.createClass({

    destroy: function(){
        this.props.onGamerDelete(this.props)
    },

    render: function() {
        return (
            <li className="list-group-item clearfix">
                <img onClick={ this.destroy } className="pull-right thumb" src={this.props.image}/>
                <h4>{this.props.name}</h4>
                <span>{this.props.gamerScore}</span>
            </li>
        )
    }

})

module.exports = MemberItem
