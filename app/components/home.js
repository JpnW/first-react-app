var React = require('react');

// use className instead of class because class is a reversed word in js.
var Home = React.createClass({
  render: function() {
    return (
      <h2 className="text-center">
      Search by Github Username Above
      </h2>
    )
  }
});

module.exports = Home;
