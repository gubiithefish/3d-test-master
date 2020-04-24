import React, { Component } from 'react';
import './App.css';
import Graph from './Graph';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUrl: 'https://gist.githubusercontent.com/gubiithefish/b1c5f9046dfe9f91f65c4f126bf35645/raw/2fd925105dc46ec000dab28f2b181e763b6856cb/lol.json'
    }
  }

  changeUrl = () => {
    document.getElementById("d3node").innerHTML = "";
    this.setState({dataUrl : 'https://gist.githubusercontent.com/mbostock/4348373/raw/85f18ac90409caa5529b32156aa6e71cf985263f/flare.json'})
  }

  clearBox = () => {
    document.getElementById("d3node").innerHTML = "";
    this.setState({dataUrl : 'https://gist.githubusercontent.com/gubiithefish/b1c5f9046dfe9f91f65c4f126bf35645/raw/2fd925105dc46ec000dab28f2b181e763b6856cb/lol.json'})
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
        <button onClick={() => this.changeUrl()} >Example1</button>
        <button onClick={() => this.clearBox()} >Example2</button>
        <button onClick={() => this.lol()} >count</button>
        <button onClick={() => this.mikkuelsprogram()} >Done</button>
        <button onClick={() => this.visibleMailsToConsole()} >Log visible emails</button>
        <button onClick={() => this.clearMailBox()} >Clear mails</button>
        <Graph dataUrl={this.state.dataUrl} />

        <main id="mainz">

        </main>
      </div>
    )
  }
}

export default App;
