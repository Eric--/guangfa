import React from 'react';

class FormChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(event){
    this.setState({value: event.target.value.substr(0,4)})
  }

  render(){
    return(
      <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        <br />
          <input type="text" defaultValue="he"/>
        <br />
        <textarea name="description" defaultValue="this is description"></textarea>
        <br />
        <select defaultValue="B">
            <option value="A">Apple</option>
            <option value="B">Banana</option>
            <option value="C">Cranberry</option>
        </select>
      </div>
    )
  }
}

module.exports = FormChange;
