import React, {useEffect} from "react";
import TodoList from "./todo/todoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";
import Loader from "./Loader";

function App() {

  const [todos, setTodos] = React.useState([
    {id:1, completed: false, title: "Видели ль вы?"},
    {id:2, completed: false, title: "Как бежит по степям"},
    {id:3, completed: false, title: "В туманах озерных кроясь"},
    {id:4, completed: false, title: "Железной наздрей храпя"},
    {id:5, completed: false, title: "На лапах чугунных поезд"},
  ])
  const [loading, setLoading] = React.useState(true)

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  //   .then(response => response.json())
  //   .then(todos => {
  //     setTimeout(()=>{setTodos(todos)
  //       setLoading(false)},2000)
  //    })},[])



  function ToggleTodo (id) {setTodos(      
    todos.map(el => {
    if(el.id === id) {
      el.completed=!el.completed
    }
    return el
  })
  )
}

function removeTodo (id) {
  setTodos(todos.filter(el => el.id!==id))
}

function addTodo (title) {
  setTodos(todos.concat([{
    title,
    id: Date.now(),
    completed: false
  }]))
}
function partComplete () {
  const classes =['wrapper']
  if(todos.every(el=>el.completed===true)) {
    classes.push('wrapperCompleted')
    useEffect(()=>{setLoading(false)},[])
  }
  return classes
}
  return (
  <Context.Provider value={{removeTodo}}>
  <div className= {partComplete().join(' ')}>
    А что было дальше? 
    <AddTodo onCreate={addTodo}/>
    {loading&&<Loader/>}
    {todos.length ?    <TodoList todos={todos} onToggle = {ToggleTodo}/>: <p>
      {loading ? null: 'Соси писос'}
      </p>}

    </div>
  </Context.Provider>  
    );
}

export default App;
