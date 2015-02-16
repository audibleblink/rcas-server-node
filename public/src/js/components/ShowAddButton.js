/** @jsx React.DOM */

var React = require('react')

var ShowAddButton = React.createClass({

  render: function() {

    var classString, buttonText

    if(this.props.displayed) {
        classString = "btn btn-danger btn-block"
        buttonText  = "Cancel"
    } else {
        classString = "btn btn-info btn-block"
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
