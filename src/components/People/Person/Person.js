import React, { Component } from 'react';

import Button from '../../Button/Button';
import './Person.css';

class Person extends Component {
  state = {
    newName: ''
  };

  onChangeHandler = e => {
    this.setState({ newName: e.target.value });
  };

  render() {
    const { deletePerson, updatePerson, editing } = this.props;
    const { name, id } = this.props.obj;
    return (
      <div className="Person">
        <div>
          {editing ? (
            <div>
              <input
                value={this.state.newName}
                onChange={this.onChangeHandler}
                type="text"
              />
              <Button clicked={() => updatePerson(id, this.state.newName)}>
                Update
              </Button>
            </div>
          ) : (
            <p>{name}</p>
          )}
        </div>
        <Button clicked={() => deletePerson(id)}>Delete</Button>
      </div>
    );
  }
}

export default Person;
