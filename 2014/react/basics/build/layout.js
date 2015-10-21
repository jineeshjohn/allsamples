var Container = React.createClass({displayName: "Container", 
  render: function() { 
      return (
        React.createElement("div", {className: "container"}, 
          React.createElement(Header, null), 
           React.createElement(Content, null), 
          React.createElement(Footer, null)
        )
    ); 
  } 
});

var Header = React.createClass({displayName: "Header", 
  render: function() { 
      return (
        React.createElement("nav", {className: "navbar navbar-default"}, 
            React.createElement("div", {className: "container-fluid"}, 
                React.createElement("div", {className: "navbar-header"}, 
                    React.createElement("a", {className: "navbar-brand", href: "#"}, "WebSiteName")
                ), 
                React.createElement("div", null, 
                    React.createElement("ul", {className: "nav navbar-nav"}, 
                        React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "Home")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Page 1")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Page 2")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Page 3"))
                    )
                )
            )
        ) 
    ); 
  } 
});

var Content = React.createClass({displayName: "Content", 
  render: function() { 
      return (
        React.createElement("div", {className: "jumbotron"}, 
            React.createElement("div", {className: "panel panel-default"}, 
                React.createElement("div", {className: "panel-body"}, "A Basic Panel from twitter")
            ), 
            React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-md-3"}, 
                    React.createElement("ul", {className: "nav nav-pills nav-stacked"}, 
                        React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "Home")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Menu 1")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Menu 2")), 
                        React.createElement("li", null, React.createElement("a", {href: "#"}, "Menu 3"))
                    )
                ), 
                React.createElement("div", {className: "col-md-6"}, 
                    React.createElement("p", null, React.createElement("strong", null, "Note: On a large screen the content will be displayed as a three-column layout. (Just enlarge the browser window to see the effect). However, the content will automatically adjust itself into a single-column layout on a small screen. So, with Bootstrap, our page is now responsive to the screen size and adjusts itself accordingly."))
                ), 
                React.createElement("div", {className: "col-md-3"}, 
                    React.createElement("p", null, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.")
                )
            )
        )
    ); 
  } 
});

var Footer = React.createClass({displayName: "Footer", 
  render: function() {
      return (
       React.createElement("nav", {className: "navbar navbar-inverse navbar-bottom"}, 
           React.createElement("div", {className: "container-fluid"}, 
               React.createElement("div", {className: "navbar-header"}, 
                   React.createElement("a", {className: "navbar-brand", href: "#"}, "WebSiteName")
               ), 
               React.createElement("div", null, 
                   React.createElement("ul", {className: "nav navbar-nav"}, 
                       React.createElement("li", {className: "active"}, React.createElement("a", {href: "#"}, "Home")), 
                       React.createElement("li", null, React.createElement("a", {href: "#"}, "Page 1")), 
                       React.createElement("li", null, React.createElement("a", {href: "#"}, "Page 2")), 
                       React.createElement("li", null, React.createElement("a", {href: "#"}, "Page 3"))
                   )
               )
           )
       )

    );
  }
});



  React.render( React.createElement(Container, null), document.body);