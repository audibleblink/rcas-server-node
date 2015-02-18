/** @jsx React.DOM */

var React = require('react')

var ShowAddButton = React.createClass({

  render: function() {

    var classString, buttonText

    if(this.props.displayed) {
        classString = "button-red-outline full-width mb2"
        buttonText  = "Cancel"
    } else {
        classString = "button-blue full-width mb2"
        buttonText  = "Create New Item"
    }


    return (
        <button onClick={this.props.onToggleForm} 
            className={classString}>
            {buttonText}
        </button>
    )
  }

})

module.exports = ShowAddButton
