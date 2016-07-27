var React = require('react');
var  ReactDOM = require('react-dom');
var Movie = require('./Movie');

var MovieList = React.createClass({
   render : function(){
     var allMovieDataMap=this.props.Alldata.map(function(movie){
             return(
               <Movie allMovies={movie} key={movie.imdbID}></Movie>
             );
     }.bind(this));
      return (
          <div className="MovieList">{allMovieDataMap}</div>
      );
    }
});
module.exports = MovieList;
