var React = require('react')

var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault()
    var text = this.refs.todo.value
    if (text.length > 0) {
      this.refs.todo.value = ''
      this.props.onAddTodo(text)
    }
    else {
      this.refs.todo.focus()
    }
  },
  render: function(){
    return (
      <div>
        <form  onSubmit={this.onSubmit} className="addTodo-form">
          <input type="text" ref="todo" placeholder="enter todo"/>
          <button className="button expanded">add Todo</button>
        </form>
      </div>
    )
  }
})

module.exports = AddTodo
