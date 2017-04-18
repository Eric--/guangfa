import React from 'react';

class ListItemWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return(
      <li>{this.props.item}</li>
    )
  }
}

module.exports = ListItemWrapper;
