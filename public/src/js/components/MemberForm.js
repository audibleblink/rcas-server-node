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

    var classString = this.props.display ? "" : " hidden"

    return (
      <form id="feedForm" className={"container" + classString} onSubmit={this.submitForm}>
        <div className="form-group">
          <input type="text" className="form-control" ref="gamer" placeholder="GamerTag" />
          <input type="text" className="form-control" ref="score" placeholder="Score" />
          <button type="submit" className="btn btn-primary btn-block">Add</button>
        </div>
      </form>
    )
  }

})

module.exports = MemberForm
