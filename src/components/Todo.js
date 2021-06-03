// A todo Component that takes in a todo as a prop. We destruct the prop into a named variable to do.
// then we create our element, we refer to the item property of the todo prop we pass in. Which we access by {todo.item}
// We then export this component out. 
const Todo = ({ todo }) => {
  return (
    <div>
      <h2>{todo.item}</h2>
    </div>
  );
};

export default Todo;
