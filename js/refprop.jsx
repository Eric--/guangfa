import React from 'react';

class Refprop extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    // Explicitly focus the text input using the raw DOM API.
    this.myTextInput.focus();
  }

  render(){
    return(
      <div>
        <input type="text" ref={(ref) => this.myTextInput = ref} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.handleClick.bind(this)}
        />
      </div>
    )
  }
}

module.exports = Refprop;
