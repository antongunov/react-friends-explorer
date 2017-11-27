import React from 'react';
import { Link } from 'react-router-dom';
import Sorry from 'components/Sorry';
import PersonInfo from './PersonInfo';
import Explorer from 'components/Explorer';
import friends from 'assets/js/friends';

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
    };
  }

  componentDidMount() {
    const personId = parseInt(this.props.match.params.id, 10);
    if (personId) {
      friends.person(personId)
        .then(person => this.setState({person}));
    }
  }

  componentWillReceiveProps(nextProps) {
    const personId = parseInt(nextProps.match.params.id, 10);
    if (this.state.person && this.state.person !== personId) {
      friends.person(personId)
        .then(person => this.setState({person}));
    }
  }

  render() {
    const person = this.state.person;
    if (person) {
      return (
        <div className="person">
          <h1>Person Page</h1>
          <Link to="/">← Home</Link>
          <PersonInfo person={person} />
          <Explorer
            placeholder={`Search ${person.name}'s friends...`}
            friends={person.friends} />
        </div>
      );
    } else {
      return (
        <Sorry but="the person was not found" />
      );
    }
  }
}

export default Person;
