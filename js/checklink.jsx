import React from 'react';

class CheckLink extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.name);
  }

  handleBtnClick(){
    this.refs.myTextInput.focus();
  }

  render(){
    return(
      <div>
        <input ref="myTextInput"/>
        <a {...this.props} onClick={e=>this.handleBtnClick(e)}>{'√ '}{React.Children.map(this.props.children, (val, idx)=><li>{val}</li>)}</a>
      </div>
    )
  }
}

CheckLink.propTypes = {
  name: React.PropTypes.number.isRequired
}

CheckLink.defaultProps = {
  name: 38383
}

module.exports = CheckLink;
