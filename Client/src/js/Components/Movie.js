var React=require('react');

var Movie = React.createClass({

  addData:function(e){
        $.ajax(
        {
          url:"http://localhost:8080/add",
          type:'POST',
          datatype:'JSON',
          data:this.props.allMovies,
          success:function(data){
            console.log("Data Inserted!");
          }.bind(this),
          error:function(err){
          console.log(err);
        }.bind(this)
      });
  },
  deleteMovie:function(e){
    $.ajax(
      {
        url:"http://localhost:8080/delete",
        type:'DELETE',
        datatype:'JSON',
        data:this.props.allMovies,
        success:function(data){
          console.log("Movie Deleted");
        }.bind(this),
        error:function(err){
          console.log(err);
        }.bind(this)
      }
    );
  },
  render : function(){
    return(
      <div className="Movie" id="moviedata">
      <div className = "row">
      <div className="col-md-6">
      <img src={this.props.allMovies.Poster} id="image"/>
      </div>

      <div className = "col-md-6">
      <h3>Title       : {this.props.allMovies.Title}</h3>
      <h4>Year        : {this.props.allMovies.Year}</h4>
      <h4>Type        : {this.props.allMovies.Type}</h4>

    <div className= "row">
      <div className="col-md-4">
      <button id="" name="" className="btn btn-success" onClick={this.addData}>ADD</button>
      </div>
      <div className="col-md-4">
      <button id="" name="" className="btn btn-success">UPDATE</button>
      </div>
     <div className="col-md-4">
     <button id="" name="" className="btn btn-success" onClick={this.deleteMovie}>DELETE</button>
     </div>
     </div>
     </div></div></div>

    );
  }
});

module.exports=Movie;
