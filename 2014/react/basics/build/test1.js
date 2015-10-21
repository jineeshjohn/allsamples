/**
* @jsx React.DOM
*/

var Example = React.createClass({displayName: "Example",
  getInitialState: function(){
      return ({
          data: 'test'
      });
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(C1, {onUpdate: this.onUpdate}), 
        React.createElement(C2, {data: this.state.data})
      )
    )
  },
  onUpdate: function(val){
      this.setState({
          data: val
      });
  }
});

var C1 = React.createClass({displayName: "C1",
    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement("input", {type: "text", ref: "myInput"}), 
                React.createElement("input", {type: "button", onClick: this.update, value: "Update C2"})
            )
        );
    },
    update: function(){
        var theVal = this.refs.myInput.getDOMNode().value;
        this.props.onUpdate(theVal);
    }
});

var C2 = React.createClass({displayName: "C2",
    render: function(){
        return (
            React.createElement("div", null, 
                this.props.data
            )
        )
    }
});

React.render(React.createElement(Example, null), document.body);
