/** @jsx React.DOM */

var React = require('react')

var ShowAddButton = React.createClass({

  render: function() {

    var classString, buttonText

    if(this.props.displayed) {
        classString = "button-outline full-width mb2 py2"
        buttonText  = "Cancel"
    } else {
        classString = "button-blue full-width mb2 py2"
        buttonText  = "Add To Roster"
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

          // <button type="submit" className="button-blue full-width my2 py2">Add</button>
