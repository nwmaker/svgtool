import React, { Component } from 'react'
import './data-form.css';

class DataForm extends Component {
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
  }
  
  segmentClicked(e) {
    console.log(e);    
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
          <input type="submit" value="AddSVG" />
        </form>
        <div className='parsed-data'>
         { this.state.flagParse ? 
          <ul className='parsed-list'>
            { this.state.parsedData.map((segment, index) => 
              <li key={index} onClick={this.segmentClicked}>{segment}</li> )}
          </ul> : null }
        </div> 
      </div>
    )
  }
}

export default DataForm
