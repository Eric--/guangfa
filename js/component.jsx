import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
    this.content='<strong>content</strong>';
    //Set your state here using this.state = {};
    //or leave blank if you don't want anything set in state
  }

  handleBtnClick(e){
    console.log(this.state.liked);
    console.log(this.props.maxLoops);
    this.setState({liked: !this.state.liked});
  }

  render() {
    var text = this.state.liked ? 'liked' : 'haven\'t liked';
    return (
         <div onClick={e=>this.handleBtnClick(e)} className="container" data-user="userId" style={{color:'red',fontSize: '30px'}}>
            加入react,haha1
            <div dangerouslySetInnerHTML={{__html:this.content}}>
            </div>
            <div>{text}</div>
         </div>
      );
  }
}

Hello.defaultProps = {
      autoPlay: false,
      maxLoops: 10
};

Hello.propTypes = {
    autoPlay: PropTypes.bool.isRequired,
    maxLoops: PropTypes.number.isRequired
};

module.exports = Hello;
