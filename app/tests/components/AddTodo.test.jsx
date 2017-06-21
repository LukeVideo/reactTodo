var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jquery')
var jQuery = require('jquery')
var TestUtils = require('react-addons-test-utils')

var {AddTodo} = require('AddTodo')

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })
  it('should dispach ADD_TODO when valid text', () =>{
    var todoText = 'test'
    var action = {
      type: 'ADD_TODO',
      text: todoText
    }
    var spy = expect.createSpy()
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />)
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = todoText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toHaveBeenCalledWith(action)

  })
  it('should NOT call dispatch if invalid string entered', () =>{
    var todoText = ''
    var spy = expect.createSpy()
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />)
    var $el = $(ReactDOM.findDOMNode(addTodo))

    addTodo.refs.todoText.value = todoText
    TestUtils.Simulate.submit($el.find('form')[0])

    expect(spy).toNotHaveBeenCalled()

  })
})
