import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos(prevTodos => ([...prevTodos, newTodo]))
  }

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter(item => item.id !== id);
      return newTodos;
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos onRemoveTodo={removeTodoHandler} items={todos} />
    </div>
  );
}

export default App;
