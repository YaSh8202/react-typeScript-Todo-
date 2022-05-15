import React from "react";
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ text: string; id:string; onRemoveTodo:(id: string)=> void  }> = (props) => {

  const removeTodo = ()=>{
    props.onRemoveTodo(props.id);
  }

  return <li onClick={removeTodo} className={classes.item} >{props.text}</li>
};

export default TodoItem;