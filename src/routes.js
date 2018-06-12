import React from 'react';
import { Route, Switch } from 'react-router-dom';
import People from './components/People/People';
import Test from './components/Test/Test';
import Todo from './components/Todo/Todo';

const Todo1 = () => <p>Todo1</p>;
const Todo2 = () => <p>Todo2</p>;
const Todo3 = () => <p>Todo3</p>;

export default (
  <Switch>
    <Route path="/" exact component={People} />
    <Route path="/b" component={Test} />
    <Route
      path="/c"
      render={() => (
        <Todo>
          <Switch>
            <Route path="/c/todo1" component={Todo1} />
            <Route path="/c/todo2" component={Todo2} />
            <Route path="/c/todo3" component={Todo3} />
          </Switch>
        </Todo>
      )}
    />
  </Switch>
);
