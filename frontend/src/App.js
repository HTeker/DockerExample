import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    people: []
  }

  componentDidMount() {

    axios.get(process.env.REACT_APP_API.trim())
    .then(response => {

      this.setState({ people: response.data });
      
    });

  }

  render() {

    return (

      <div className="App">

        { this.state.people.length > 0 ?

          <ul>

            { this.state.people.map(person => {

              return (<li>{person.firstName} {person.lastName} ({person.email})</li>);

            }) }

          </ul>
        
        :

          <p>Geen data om te tonen.</p>
        
        }
      </div>

    );

  }

}

export default App;
