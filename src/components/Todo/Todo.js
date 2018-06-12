import React from 'react';
import { Link } from 'react-router-dom';

const Todo = props => {
  return (
    <div>
      <Link className="Navbar__link" to="/c/todo1">
        todo1
      </Link>
      <Link className="Navbar__link" to="/c/todo2">
        todo2
      </Link>
      <Link className="Navbar__link" to="/c/todo3">
        todo3
      </Link>
      <h1>Todo!!!</h1>
      <div>{props.children}</div>
    </div>
  );
};

export default Todo;
