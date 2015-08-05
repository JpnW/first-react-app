var React = require('react');

var Router = require('react-router');

var routers = require('./config/routes');

Router.run(routers, function(Root) {
  React.render(<Root />, document.getElementsById('app'));
});
