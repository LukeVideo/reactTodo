var expect = require('expect')

var TodoAPI = require('TodoAPI')

describe('TodoAPI', () => {
  beforeEach(()=> {
    localStorage.removeItem('todos')
  })

  it ('should exist', () => {
    expect(TodoAPI).toExist()
  })
  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test alll files',
        completed: false
      }]

      TodoAPI.setTodos(todos)
      var actualTodos = JSON.parse(localStorage.getItem('todos'))

      expect(actualTodos).toEqual(todos)
    })
    it('should not set invalid todos array', () => {
      var badtodos = {
        A: 23,
        tcccext: 'test alll files',
        compcccccleted: false
      }
      TodoAPI.setTodos(badtodos)
      expect(localStorage.getItem('todos')).toBe(null)

    })
  })
  describe('getTodos', ()=>{
    it('sould return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos()
      expect(actualTodos).toEqual([])
    })
    it('should return todo if valid array in localStorage', () => {
      var todos = [{
        id: 23,
        text: 'test alll files',
        completed: false
      }]
      localStorage.setItem('todos', JSON.stringify(todos))
      var actualTodos = TodoAPI.getTodos()

      expect(actualTodos).toEqual(todos)
    })
  })
  describe('filtereTodos', () =>{
      var todos = [{
        id: 1,
        text: 'test some files',
        completed: true
      },
      {
        id: 2,
        text: 'test all files',
        completed: false
      },
      {
        id: 3,
        text: 'test all files',
        completed: true
      }]
      it('sould return all items if showCompleted true', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '')

        expect(filteredTodos.length).toBe(3)
      })
      it('sould not return completed items if showCompleted false', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, false, '')

        expect(filteredTodos.length).toBe(1)
      })
      it('should sort by completed status', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '')
        expect(filteredTodos[0].completed).toBe(false)
      })
      it('sould filter todos by searchText', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, 'all')

        expect(filteredTodos.length).toBe(2)
      })
      it('sould return all todos if searchText is empty', () => {
        var filteredTodos = TodoAPI.filterTodos(todos, true, '')

        expect(filteredTodos.length).toBe(3)
      })

  })
})
