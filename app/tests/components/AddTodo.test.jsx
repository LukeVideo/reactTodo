var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jquery')
var jQuery = require('jquery')
var TestUtils = require('react-addons-test-utils')

var AddTodo = require('AddTodo')

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })
  it('should call onAddTodo if valid todo entered', () =>{
    var todoText = 'test'
    var spy = expect.createSpy()
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />)
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todo.value = todoText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(todoText)

  })
  it('should NOT call onAddTodo if empty string entered', () =>{
    var todoText = ''
    var spy = expect.createSpy()
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />)
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todo.value = todoText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()

  })
})
