//Here we are importing in our dependencies and components into our main App component

//Destructing useState from the react package
import { useState } from 'react';
//Importing in our Header Component
import Header from './components/Header';
//Importing in our List Component
import List from './components/List';
//Importing in our AddTodo Component
import AddTodo from './components/AddTodo';

// We init our main app component. It is a function based component instead of class based
function App() {
  // We init the state for our APP component. We init a variable (TODOs) and a callback function to update that state(setTodos) and we are using the useState
  // hook to set it equal to an array of todos.
  const [todos, setTodos] = useState([
    {
      id: 1,
      item: 'Drink Water',
    },
    {
      id: 2,
      item: 'Make Healthy Dinner',
    },
    {
      id: 3,
      item: 'Exercise',
    },
  ]);
  // An addTodo function which takes in a an todo(object), creates a new id using the Math.ceil function, creates a new todo by spreading out the newly
  // created id and the passed in todo object. We then update the statae with the setTodos function. We copy over all the old todos with the spread .. syntax
  // and add in our newTodo object.
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random() * 100000);
    const newTodo = { id, ...todo };
    setTodos([...todos, newTodo]);
  };
  //Here is our actual component that we render to the screen. They are encapsulated by a common div node as is practice in React.
  //Our imported Components being with a Capital and are self closing. And in the declaration, we can pass down things like state
  // and props
  return (
    <div className="container">
      {/* Passing in the string in as a property called title */}
      <Header title="Todo List" />
      {/* Passing  the addTodo function as the prop onAdd  */}
      <AddTodo onAdd={addTodo} />
      {/* Passing in our todos state as a todos property down to List */}
      <List todos={todos} />
    </div>
  );
}
// Exporting our app out
export default App;
