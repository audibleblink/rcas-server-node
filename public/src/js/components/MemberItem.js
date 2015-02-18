/** @jsx React.DOM */

var React = require('react')

var MemberItem = React.createClass({

    destroy: function(){
        this.props.onGamerDelete(this.props)
    },

    render: function() {
        return (
            <div className="clearfix memberitem m3">
                <div className="memberinfo md-col-6 inline-block v-align">
                    <p className="h2">{this.props.name}</p>
                    <span>{this.props.gamerScore}</span>
                </div>
                <div className="memberpic md-col-6 inline-block">
                    <img onClick={ this.destroy } className="thumb right" src={this.props.image}/>
                </div>
            </div>
        )
    }

})

module.exports = MemberItem
