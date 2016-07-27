var React=require('react');
var MovieForm=require('./MovieForm');
var MovieList=require('./MovieList');

var MovieBox = React.createClass({
  getInitialState:function()
  {
    return{data:[]};
  },
  submitTitleData:function(movie){
    $.ajax(
      {
        url:"http://www.omdbapi.com/?s="+movie.Title,
        type:'Get',
        datatype:'JSON',
        success:function(data){
            console.log(data);
           this.setState({data:data.Search})
        }.bind(this),

      error:function(err){
        console.log(err);
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div>
        <MovieForm
        handleSubmitTitle={this.submitTitleData}
        />
        <MovieList
        Alldata={this.state.data}
        />
        </div>
    );
  }


});
module.exports=MovieBox;
