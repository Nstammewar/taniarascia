import React, { Component } from 'react';
import Table from './Table';
import Form from './Form'
class App extends Component {
 
  state = {
    characters: [],
  }
  removeCharacter = index => {
    //console.log("index  "+index)
    const { characters } = this.state
    this.setState({
      characters: characters.filter((character, i) => {
       // console.log("setState  "+i)
       // console.log(i !== index)
        return i !== index;
      })
    });
  }
   handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  }
  
  render() {
    const { characters } = this.state
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
} 
export default App