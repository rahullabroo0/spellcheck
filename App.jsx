import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textAreaValue: event.target.value });
  }

  render() {
    return (
      <div>
        <label>Enter value : </label>
        <textarea 
        autocomplete="on" spellcheck="true" autocapitalize="on" spellcheck="on"
          value={this.state.textAreaValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
