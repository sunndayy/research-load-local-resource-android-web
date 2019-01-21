import React, { Component } from 'react';
import './App.css';

const URL = window.URL || window.webkitURL;

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      imgSrc1: '',
      imgSrc2: ''
    };
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          File to upload: <input type="file" accept="image/*;capture=camera" name="uploadfile" multiple
          onChange={e => {
            console.log(e.target.files);
            if (e.target.files.length == 2) {
              const imgSrc1 = URL.createObjectURL(e.target.files[0]);
              const imgSrc2 = URL.createObjectURL(e.target.files[1]);
              this.setState({
                imgSrc1,
                imgSrc2
              })
            }           
          }} 
          />
          <img src={this.state.imgSrc1} width = "100" height = "100"/>
          <img src={this.state.imgSrc2} width = "100" height = "100"/>
        </header>
      </div>
    );
  }
}

export default App;
