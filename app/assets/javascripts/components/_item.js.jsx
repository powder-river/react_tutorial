var Item = React.createClass({
  getInitialState(){
    return {editable: false}
  },

  handleEdit(){
    if(this.state.editable){
      var name = this.refs.name.value;
      var id = this.props.item.id;
      var description = this.refs.description.value;
      var item ={id: id, name: name, description: description};
      this.props.handleUpdate(item);
    }
    this.setState({editable: !this.state.editable})
  },

  render(){
    var name = this.state.editable ? <input className="col-6" type="text" ref="name" defaultValue={this.props.item.name}/> : <h3>{this.props.item.name }</h3>
    var description = this.state.editable ? <input className="col-6" type="text" ref="description" defaultValue={this.props.item.description}/> : <p>{ this.props.item.description }</p>

    return(
      <div className="col-12 item">
        {name}
        {description}
        <div className="col-12">
          <button  onClick={this.handleEdit}>{this.state.editable ? "Submit" : "Edit"}</button>
          <button className="deletebtn"  onClick={this.props.handleDelete}>Delete</button>
        </div>

      </div>
    )
  }
});
