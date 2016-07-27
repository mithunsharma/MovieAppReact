var React=require('react');
var {render}=require('react-dom');
var MovieBox=require('./Components/MovieBox');
var {browserHistory,Router,Route,Link,IndexRoute}=require('react-router');
var NavBar=require('./Components/NavBar');
var Home=require('./Components/Home')
var MainComponent = React.createClass({
  render:function() {
        return (
        <div className="MainComponent">
        <NavBar/>
        <br/>
        {this.props.children}
        </div>
      );
    }
  });
render (
  <Router history={browserHistory}>
    <Route path='/' component={MainComponent}>
      <IndexRoute component={Home}/>
      <Route path='search' component={MovieBox}/>
    </Route>
  </Router>,  document.getElementById('app')
);
