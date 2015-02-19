/** @jsx React.DOM */

var React = require('react')

var MemberItem = React.createClass({

    destroy: function(){
        this.props.onGamerDelete(this.props)
    },

    render: function() {
        return (
            <div className="clearfix memberitem m3">
                <div className="memberinfo md-col-12 lg-col-6 inline-block v-align">
                    <h2 className="h2">{this.props.name}</h2> 
                    <span className="blue">{this.props.gamerScore}</span>
                </div>
                <div className="memberpic md-col-8 sm-col-8 lg-col-6 inline-block">
                    <img onClick={ this.destroy } className="thumb right lg-col-3 md-col-6" src={this.props.image}/>
                </div>
            </div>
        )
    }

})

module.exports = MemberItem
