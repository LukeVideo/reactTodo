var React = require('react')
var TodoList = require('TodoList')

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'walk the dog'
        },
        {
          id: 2,
          text: 'Get shit done'
        },
        {
          id:3,
          text: 'go home'
        },
        {
          id: 4,
          text: 'play Guitare'
        }
      ]
    }
  },
  render: function () {
    var {todos} = this.state
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
})
module.exports = TodoApp
