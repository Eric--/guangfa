import React from 'react';

var PagePic = require('./pagepic.jsx');
var PageLink = require('./pagelink.jsx');

class Avatar extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <PagePic pagename={this.props.pagename} />
        <PageLink pagename={this.props.pagename} />
      </div>
    );
  }
}

module.exports = Avatar;
