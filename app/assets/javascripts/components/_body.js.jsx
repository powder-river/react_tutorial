var Body = React.createClass({
  getInitialState(){
    return { items: [] }
  },

  handleSubmit(item){
    var newState = this.state.items.concat(item);
    this.setState({items: newState})
  },

  componentDidMount(){
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
  },

  render(){
    return(
      <div>
        <NewItem handleSubmit={this.handleSubmit}/>
        <AllItems items={this.state.items}/>
      </div>
    )
  }
});
