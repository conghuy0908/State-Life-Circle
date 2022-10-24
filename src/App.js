import React, { Component } from 'react';
 
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isExpand: false
    };
  }
  handleShow = () =>{
    this.setState({isExpand:true})
  };
  handleHidden = () =>{
    this.setState({isExpand:false})
  };
  render() {
    const {isExpand} = this.state;
    if (isExpand) {
      return(
        <div>
          <button onClick={this.handleHidden}>Đóng giới thiệu</button>
          <h1>Introduction</h1>
          <p>Conditional Rendering</p>
        </div>
      )
    } else {
      return(
        <div>
        <button onClick={this.handleShow} >Xem giới thiệu</button>
        </div>
      )
    }
    
  }
};
export default App;