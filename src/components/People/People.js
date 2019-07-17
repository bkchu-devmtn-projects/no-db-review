import React, { Component } from 'react';
import axios from 'axios';

import Person from './Person/Person';
import Button from '../Button/Button';

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      people: [],
      newPerson: '',
      filter: '',
      stuff: ''
    };
    // this.deletePersonHandler = this.deletePersonHandler.bind(this);
  }
  componentDidMount() {
    axios.get('/api/people').then(response => {
      this.setState({ people: response.data });
    });
  }

  deletePersonHandler = id => {
    axios.delete(`/api/people/${id}`).then(response => {
      this.setState({ people: response.data });
    });
  };

  updatePersonHandler = (id, name) => {
    axios.put(`/api/people/${id}`, { name }).then(response => {
      this.setState({ people: response.data, editing: false });
    });
  };

  filterPeopleHandler = e => {
    this.setState({ filter: e.target.value });

    axios.get(`/api/people/filter/${e.target.value}`).then(response => {
      this.setState({ people: response.data });
    });
  };

  onChangeHandler = e => {
    this.setState({ newPerson: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();

    //make request here
    axios.post('/api/people', { name: this.state.newPerson }).then(response => {
      //clear out input
      this.setState({ people: response.data, newPerson: '' });
    });
  };

  onEditHandler = () => {
    this.setState({ editing: !this.state.editing });
  };

  submitStuff = () => {
    axios.post('/api/putsomethinginarray', { something: this.state.stuff }).then(response => {
      console.log(response.data);
    })
  }



  onChangeSubmitStuff = e => {
    this.setState({stuff: e.target.value});
  }
  
  
  render() {
    const { people, editing } = this.state;

    const peopleDisplay = people.map(person => {
      return (
        <Person
          editing={editing}
          updatePerson={this.updatePersonHandler}
          deletePerson={this.deletePersonHandler}
          key={person.id}
          obj={person}
        />
      );
    });

    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input
            value={this.state.newPerson}
            onChange={this.onChangeHandler}
            type="text"
            placeholder="add new person"
          />
          <Button>Submit</Button>
        </form>

        <Button clicked={this.onEditHandler}>Edit</Button>
        <input
          value={this.state.filter}
          onChange={this.filterPeopleHandler}
          type="text"
          placeholder="Filter"
        />
        <div style={{ border: '5px solid rebeccapurple' }}>{peopleDisplay}</div>

        <input onChange={this.onChangeSubmitStuff} type="text"/>
        <button onClick={this.submitStuff}>SubmitStuff</button>
      </div>
    );
  }
}

export default People;
