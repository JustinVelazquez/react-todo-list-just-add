//Import in React
import React from 'react';

// Creating our Header component and passing in props. We did not destructor our props into a variable. So when we need to reference that property
// we have to refer to it as props.property
const Header = (props) => {
  return (
    <div>
      {/* creating a h1 with our props.title and pass in style as a property */}
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

//Creating a instyle styling for component
const headerStyle = {
  fontSize: '40px',
  textDecoration: 'underline',
};

export default Header;
