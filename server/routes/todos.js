var express = require('express');
var router = express.Router();

const todoList = [];

// GET todoList
router.get('/', function(req, res, next) {  //when client is getting 
  res.json({ todoList: todoList}); //first todos is a key, 2nd todos is the const todos
});

//update todoList (add new todo to todoList)
router.post('/', function(req, res, next) { //when client is posting
  //req.body.todo is the request from client, todo must be the same as the key in client; then assign to const todo
  const todo = req.body.todo; 
  //push the const todo into todoList
  todoList.push(todo); 
  //return the response (newly added todo) although client doesn't need it but it notifies this is the last middleware
  res.json({ todo: todo }); 

});

//update todoList (edited todo)
router.put('/', function(req, res, next) {
  const updatedTodo = req.body.updatedTodo;
  const id = updatedTodo.id;
  const toBeUpdated = todoList.find(todo => todo.id === id);
  // const toBeUpdated = todoList.filter((todo)=> {
  //   return (
  //     todo === updatedTodo
  //   );
  // })[0]
  const index = todoList.indexOf(toBeUpdated);
  todoList.splice(index, 1, updatedTodo);

  res.json({updatedTodo: updatedTodo});
});

//delete a todo from todoList
router.delete('/', function (req, res, next) {  
  const todoToBeDeleted = req.body.todo;
  //id of the object to be deleted
  const id = todoToBeDeleted.id; 
  //find the object to be deleted in the array. find() method returns the value of the 1st element in the array that satisfies the provided testing func
  const toBeDeleted = todoList.find(todo => todo.id === id);
  //index of the object to be deleted
  const index = todoList.indexOf(toBeDeleted);
  //1st param of splice is the start index, 2nd param is num of elements to be changed (removed in this case) 
  todoList.splice(index, 1);
 
  res.json({todoList: todoList});
});

module.exports = router;
