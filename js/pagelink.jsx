import React from 'react';

class PageLink extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <a href={'https://www.facebook.com/' + this.props.pagename}>
        {this.props.pagename}
      </a>
    );
  }
}

module.exports = PageLink;
