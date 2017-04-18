import React from 'react';

class Hello extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity: 1.0
    };
  }

  componentWillMount(){
      this.timer = setInterval(function () {
        var opacity = this.state.opacity;
        opacity -= .05;
        if (opacity < 0.1) {
          opacity = 1.0;
        }
        this.setState({
          opacity: opacity
        });
      }.bind(this), 100);
  }

  handleClick(){
    this.setState({opacity: 0.5});
  }

  render(){
    return (
      <div style={{opacity: this.state.opacity, fontSize: 40, fontWeight: "bold"}} onClick={e=>this.handleClick(e)}>
        Hello {this.props.name}
      </div>
    );
  }
}

module.exports = Hello;
