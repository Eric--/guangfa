require("../css/style.css");

//react
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./component.jsx');
var myDivElement = <div className="foo">test  aaad</div>;

// var Avatar = require('./avatar.jsx');
//
// var ListItemWrapper = require('./listitemwrapper.jsx');
//
// var CheckLink = require('./checklink.jsx');
//
// var Subtoparent = require('./subtoparent.jsx');
//
// var FormChange = require('./formchange.jsx');
//
// var Refprop = require('./refprop.jsx');

var People = require('./es6.js');
var p1 = new People("xiaolong");
p1.sayHi();
p1.prop = 12334;
console.log(p1.prop);
console.log(People.sayEle());
console.log(People.calcEggs(10000));

// var ComponentMount = require('./com_mount.jsx');
var RepoList = require('./githubres.jsx');

ReactDOM.render(<RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />,
document.getElementById('app'));
// ReactDOM.render(myDivElement, document.getElementById('app'));
