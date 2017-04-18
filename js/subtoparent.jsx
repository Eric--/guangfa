import React from 'react';

class MyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['item1', 'item2'],
      curItem: 'item1'
    };
  }

  // 改变curItem的回调函数
	changeItem(item){
		this.setState({
			curItem: item
		});
	}

	render(){
		return (
			<div>
				The curItem is: {this.state.curItem}
				<List list={this.state.list} curItem={this.state.curItem}/>
        <SelectionButtons changeItem={this.changeItem.bind(this)}/>
			</div>
		)
	}
}

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickItem(item){
		this.props.changeItem(item);
	}

	render(){

    var selectedStyle = {
      color: 'white',
      background: 'red'
    };
		return (
			<ul>
				{
					(function(){
						var self = this;
						return this.props.list.map(function(item){
              var itemStyle = (item == self.props.curItem) ? selectedStyle : {};
							return (
								<li style={itemStyle}>I am {item}</li>
							)
						});
					}.bind(this))()
				}
			</ul>
		)
	}
}

class SelectionButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickItem(item){
    this.props.changeItem(item);
  }

  render(){
    return(
      <div>
				<button onClick={this.onClickItem.bind(this, 'item1')}>item1</button>
				<button onClick={this.onClickItem.bind(this, 'item2')}>item2</button>
			</div>
    )
  }
}

module.exports = MyContainer;
