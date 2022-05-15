class Todo {
  // Here in typesript we first have to define the types of values which will be store here
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }

}

export default Todo;
