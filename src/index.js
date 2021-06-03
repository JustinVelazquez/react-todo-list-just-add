//Importing in our Dependencies. Comes standard with create-react-app. Newer syntax allows us to not call React but just REACTDOM.
//WE also import our App component and styling form index.css
// reportWebVitals is not needed
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//In order to render our react application to the Virtual DOM, we need to wrap the entire application around ReactDOM.render() and pass it the
//document.getElementByID('root) which references our root div located in the public folder on the index.hmtl file. This is what actually gets passed
//To the Browser to be able to render our application.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
