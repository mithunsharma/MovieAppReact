var React=require('react');

var MovieForm=React.createClass({
  getInitialState:function()
  {
    return{Title:''};
  },
  handleTitleChange:function(e)
  {
    this.setState({Title:e.target.value});
    //console.log(Title);
  },
  submitTitle:function(e) {
    e.preventDefault();
    this.props.handleSubmitTitle({Title:this.state.Title});

  },
  render:function(){
    return(
        <div>
      <form className="form-horizontal" onSubmit={this.submitTitle}>
    <fieldset id="fieldset">

    <legend>Movie Search</legend>
    <div className="style">
    <div className="form-group">
      <div className="col-md-12">
      <input id="textinput" name="Title" type="text" value={this.state.Title} onChange={this.handleTitleChange} placeholder="Enter Movie Name" className="form-control"/>
      </div>
    </div>

    <div className="form-group">
      <div className="col-md-12">
        <button id="" name="" className="btn btn-success">Search</button>
      </div>
    </div>
    </div>
    </fieldset>
</form>
</div>
  );
  }
});
module.exports = MovieForm;
