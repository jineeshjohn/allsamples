var Child = React.createClass({displayName: "Child",
    render: function() {
        return React.createElement("input", {type: "text"});
    }
});

var Parent = React.createClass({displayName: "Parent",
    render: function() {
        return React.createElement(Child, null);
    }
});

React.render(
  React.createElement("div", {
      onChange: function() {
        console.log('I am  on change');

      }, 
      onFocusCapture: function() { console.log('onFocusCapture'); }}, 
      React.createElement(Parent, null)
  ),
  document.body
);
