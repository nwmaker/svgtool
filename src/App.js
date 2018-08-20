import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import SVGData from './components/svgdata'
//import DataForm from './components/data-form'
import LoadSVG from './components/load-svg'
import ShowSVG from './components/show-svg'
import ShowDemo from './components/show-demo'

//import SVGLines from './components/svg-lines'
//import SVGNode from './svgnodes/svg-node'
import SVGAST from './svgnodes/svg-ast'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LoadSVG />
        <ShowSVG />
        <ShowDemo />
        <svg width='400' height='300'>
          <path d={<SVGAST />} />
        </svg>
      </div>
    );
  }
}

export default App;
