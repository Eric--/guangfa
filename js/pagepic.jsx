import React from 'react';

class PagePic extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
        <img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'} />
    );
  }
}

module.exports = PagePic;
