//Importing our Todo Component in to use in our List component
import Todo from './Todo';

// We init a List component and destructor the todos property which we inherited down from our app component. We know Todos is our state and is an array
// of todos.
const List = ({ todos }) => {
  // What we render to the screen. We map over our todos array which was inherited down through our app component. WE use map because it does NOT mutate
  // our existing array, it instead copies over and creates a new array.
  return (
    <div>
      {/* For every todo in our Todos Array, we insert in a Todo Component and pass in a unique key value and pass each individual  todo as a property
          for each individual Todo Component   */}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
