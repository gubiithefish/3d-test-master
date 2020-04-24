import React, { Component } from 'react';
import './App.css';
import Graph from './Graph';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUrl: 'https://gist.githubusercontent.com/gubiithefish/ec1f7d35256ffd350da65a873025d2f6/raw/9233286e8c4c23ab6c786a6709a2795ef6a8b7d4/first.json'
    }
  }

  changeUrl = () => {
    document.getElementById("d3node").innerHTML = "";
    this.setState({dataUrl : 'https://gist.githubusercontent.com/gubiithefish/0b40cc51481c16d737c698ccaf7f3996/raw/29f85e058a3bee8d9575baff09de64913e7076f0/second.json'})
  }

  clearBox = () => {
    document.getElementById("d3node").innerHTML = "";
    this.setState({dataUrl : 'https://gist.githubusercontent.com/gubiithefish/ec1f7d35256ffd350da65a873025d2f6/raw/9233286e8c4c23ab6c786a6709a2795ef6a8b7d4/first.json'})
  }

  changeUrl2 = () => {
    document.getElementById("d3node").innerHTML = "";
    this.setState({dataUrl : 'https://gist.githubusercontent.com/gubiithefish/17ac0b0bdbb1935a855e48360fde4f01/raw/519d37dc937447e38d590822e2ed6a8918b4aeda/third.json'})
  }

  lol = () => {
    //console.log(document.getElementById("d3node").childNodes[0].childElementCount)
    console.log(document.getElementsByClassName('email')[0].innerHTML)
  }

  visibleMailsToConsole = () => {
    const slices = document.querySelectorAll('text[email][display]:not([display="none"])');
    var t = "";
    [].forEach.call(slices, function(slice) {
      var p = "<p>" + slice.attributes[1].value;
      p += "</p>";
      t += p;
    });
    document.getElementById("mainz").innerHTML += t;
  }

  clearMailBox = () => {
    document.getElementById("mainz").innerHTML = "";
    }

    mikkuelsprogram = () => {
  for (var i=0 ; i < 2737; i++){
    console.log("næ")
}}


  render() {
    return (
      <div>
        <button onClick={() => this.changeUrl()} >Sort1: Industry, Geo, CompanyType</button>
        <button onClick={() => this.clearBox()} >Sort2: Geo, Industry, CompanyType</button>
        <button onClick={() => this.changeUrl2()} >Sort3: Primary SDG, Geo, CompanyType</button>
        <button onClick={() => this.visibleMailsToConsole()} >Save mails</button>
        <button onClick={() => this.clearMailBox()} >Clear mails</button>
        <Graph dataUrl={this.state.dataUrl} />

        <main id="mainz"></main>
      </div>
    )
  }
}

export default App;
