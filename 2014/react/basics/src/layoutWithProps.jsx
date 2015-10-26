var Container = React.createClass({ 
  render: function() { 
      return (
        <div className="container">
          <Header />
           <Content />
          <Footer data={this.props.data} />
        </div>
    ); 
  } 
});

var Header = React.createClass({ 
  render: function() { 
      return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">WebSiteName</a>
                </div>
                <div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                </div>
            </div>
        </nav> 
    ); 
  } 
});

var Content = React.createClass({ 
  render: function() { 
      return (
        <div className='jumbotron'>
            <div className="panel panel-default">
                <div className="panel-body">A Basic Panel from twitter</div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <ul className="nav nav-pills nav-stacked">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Menu 1</a></li>
                        <li><a href="#">Menu 2</a></li>
                        <li><a href="#">Menu 3</a></li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <p><strong>Note: On a large screen the content will be displayed as a three-column layout. (Just enlarge the browser window to see the effect). However, the content will automatically adjust itself into a single-column layout on a small screen. So, with Bootstrap, our page is now responsive to the screen size and adjusts itself accordingly.</strong></p>
                </div>
                <div className="col-md-3">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
            </div>
        </div>
    ); 
  } 
});

var Footer = React.createClass({ 
  render: function() {
      return (
       <nav className="navbar navbar-inverse navbar-bottom">
           <div className="container-fluid">
               <div className="navbar-header">
                   <a className="navbar-brand" href="#">WebSiteName</a>
               </div>
               <div>
                   <ul className="nav navbar-nav">
                       <li className="active"><a href="#">Home</a></li>
                       <li><a href="#">Page 1 K:{this.props.data} :L</a></li>
                       <li><a href="#">Page 2</a></li>
                       <li><a href="#">Page 3</a></li>
                   </ul>
               </div>
           </div>
       </nav>

    );
  }
});



  React.render( <Container data='{name:12,age:34}' />, document.body);