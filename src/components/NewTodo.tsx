import React, { useRef,useContext } from "react";
import classes from './NewTodo.module.css';

import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {

  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);// we have to specify about which type of element this ref will point to

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;//? means if todoTextinputref is not linked it will return undefined or null
    // ! is used if you as a developer knows that this value will never will be null in this spot
    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    todosCtx.addTodo(enteredText);
  }

  return <form className={classes.form} onSubmit={submitHandler} >
    <label htmlFor="text" >Todo Text</label>
    <input ref={todoTextInputRef} type="text" id="text" />
    <button >Add Todo</button>
  </form>
};

export default NewTodo;