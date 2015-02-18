/** @jsx React.DOM */

var React         = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    MemberForm    = require('./MemberForm'),
    MemberList    = require('./MemberList'),
    socket        = require('socket.io-client')()


var Roster = React.createClass({
  avatar: "http://www.vincegolangco.com/wp-content/uploads/2010/12/batman-for-facebook_thumb.jpg",

    componentDidMount: function(){

        socket.on("fbChange", function(players){
            this.setState({
                items: players,
                formDisplayed: false
            })
        }.bind(this))
    },

    getInitialState: function() {
        // Declare ALL the data yout app will need here
        var gamers = []

        // Return your data in an object. This will get passed down through props.
        // The return value of this function sets the `state` property 
        // for this "Roster" class
        return {
            items: gamers,
            formDisplayed: false
        }
    },

    addGamer: function(gamer){
        gamer.imageUrl = this.avatar
        socket.emit("gamer added", gamer)
    },

    onToggleForm: function(){
        this.setState({
            formDisplayed: !this.state.formDisplayed
        })
    },

    onGamerDelete: function(gamerData) {
        console.log("emitting 'gamer deleted'")
        socket.emit("gamer deleted", gamerData)
    },


    render: function() {
        return (
            <div>

                <div className="container mx-auto">
                    <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm}/>
                </div>

                <MemberForm display={this.state.formDisplayed} addGamer={this.addGamer}/>

                <MemberList onGamerDelete={this.onGamerDelete} items={this.state.items} />

            </div>
        )
    }

})

module.exports = Roster
