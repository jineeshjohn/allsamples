var Child = React.createClass({
    render: function() {
        return <input type="text" />;
    }
});

var Parent = React.createClass({
    render: function() {
        return <Child />;
    }
});

React.render(
  <div
      onChange={function() {
        console.log('I am  on change');

      }}
      onFocusCapture={function() { console.log('onFocusCapture'); }}>
      <Parent />
  </div>,
  document.body
);
