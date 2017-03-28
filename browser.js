var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./components/Main.js');

//var Menu = require('./components/Menu.js');
// Maybe if wrapped in document ready function?
//var links = ["Main", "About", "Contact"];


ReactDOM.render(
  <Main />,
  document.getElementById('react-container')
);

/*
ReactDOM.render(
  <Menu data={links} />,
  document.getElementById('react-menu')
);
*/
//Hold on a bit still testin

