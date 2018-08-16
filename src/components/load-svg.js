import React, { Component } from 'react'
import SVGSegment from './svg-segment'
import SVGNode from '../svgnodes/svg-node'
import './load-svg.css';

class LoadSVG extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultRowNum: 1,
      rowNum: 4,
      svgData: '',
      flagParse: false,
      parsedData: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.segmentClicked = this.segmentClicked.bind(this);
    this.pathClicked = this.pathClicked.bind(this);
  }
  
  segmentClicked(index) {
    console.log('load-svg - segment clicked: ', index);    
  }

  pathClicked(index) {
    console.log('load-svg - path clicked: ', index);    
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({svgData: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.parsedData);

    this.setState({
      flagParse: true,
      parsedData: this.state.svgData.split('z')
    });
  }

  render() {
    return (
      <div className='Data-Form'>
        <form onSubmit={this.handleSubmit}>
          <textarea className='textAutoExpand' 
            rows={this.state.rowNum}
            data-min-rows={this.state.defaultRowNum} 
            placeholder='SVG Data'
            value={this.state.svgData}
            onChange={this.handleChange} />
          <input type="submit" value="Load SVG" />
        </form>
        <div className='parsed-data'>
           { this.state.flagParse ?  this.state.parsedData.map( (segment, index) => (
             <SVGSegment key={index} id={index} 
                    data={segment} 
                    callback={this.segmentClicked} /> )) : null } 
        </div>
        <div className='svg-display'>
          { this.state.flagParse ? 
              <SVGNode data={this.state.svgData} callback={this.pathClicked} />
              : null
          }
        </div> 
      </div>
    )
  }
}

export default LoadSVG

