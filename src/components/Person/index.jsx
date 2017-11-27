import React from 'react';
import Sorry from 'components/Sorry';
import PersonInfo from './PersonInfo';
import Explorer from 'components/Explorer';
import friends from 'assets/js/friends';

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = { person: null };
  }

  componentDidMount() {
    const personId = parseInt(this.props.match.params.id, 10);
    if (personId) {
      friends.person(personId)
        .then(person => this.setState({person}));
    }
  }

  render() {
    const person = this.state.person;
    if (person) {
      return (
        <div className="person">
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