/** @jsx React.DOM */

var React = require('react')

var MemberItem = React.createClass({

    destroy: function(){
        this.props.onGamerDelete(this.props)
    },

    render: function() {
        return (
            <div className="clearfix memberitem m3">
                <div className="memberinfo sm-col-12 md-col-6 inline-block v-align">
                    <div className="h2">{this.props.name}</div> 
                    <span className="blue">{this.props.gamerScore}</span>
                </div>
                <div className="memberpic md-col-5 inline-block">
                    <img onClick={ this.destroy } className="thumb right md-col-3 sm-col-12" src={this.props.image}/>
                </div>
            </div>
        )
    }

})

module.exports = MemberItem
