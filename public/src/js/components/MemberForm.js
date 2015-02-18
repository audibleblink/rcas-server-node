/** @jsx React.DOM */

var React = require('react')

var MemberForm = React.createClass({

  submitForm: function(e){
    e.preventDefault()
    var name     = this.refs.gamer.getDOMNode().value
    var score    = this.refs.score.getDOMNode().value
    var newGamer = {gamertag: name, gamerScore: score}
    this.refs.gamer.getDOMNode().form.reset()

    this.props.addGamer(newGamer)
  },

  render: function() {

    var classString = this.props.display ? "" : " hide"

    return (
      <form id="feedForm" className={"container" + classString} onSubmit={this.submitForm}>
        <div className="form-group">
          <input type="text" className="full-width mb1" ref="gamer" placeholder="GamerTag" />
          <input type="text" className="full-width mb1" ref="score" placeholder="Score" />
          <button type="submit" className="button-blue-outline full-width">Add</button>
        </div>
      </form>
    )
  }

})

module.exports = MemberForm
