import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
const style = {
    key: {
        listStyle :'none',
        margin: 0,
        padding: 0
    }
}

function TodoList (props) {
    return(
        <ul style = {style.key}>
            {props.todos.map((el,index)=>{
                return <TodoItem el={el} key={el.id} index ={index} onChange={props.onToggle}/>
            })}
        </ul>
    ) 
}

TodoList.propTypes ={
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle:PropTypes.func.isRequired
}

export default TodoList