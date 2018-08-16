import React, { Component } from 'react'

class SVGPath extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      isClicked: false,
      defaultColor: 'black',
      clickedColor: 'red'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(e) {
    this.setState({
      isClicked: !this.state.isClicked,
    })
    this.props.callback(this.state.id)
  }

  render() {
    return (
      <path key={this.props.id} 
        className='svg-path'
        onClick={this.handleClick}
        fill='no-fill'
        stroke={this.state.isClicked ? this.state.clickedColor : this.state.defaultColor}
        strokeWidth='0.2'
        d={this.props.data}
      />
    )
  }
}

export default SVGPath
