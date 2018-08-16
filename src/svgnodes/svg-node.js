import React, { Component } from 'react'
import SVGPath from './svg-path'
import './svg-node.css'

/*
 * SVG Node is the parent node for all SVG elements.
 * It is the container for all other SVG elements.
 * 
 */

class SVGNode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      color: 'black'
    }
    this.handleClick = this.handleClick.bind(this)
    this.circleClicked = this.circleClicked.bind(this)
    this.pathClicked = this.pathClicked.bind(this)
    this.handleHoverStart = this.handleHoverStart.bind(this)
    this.handleHoverDone = this.handleHoverDone.bind(this)
  }
  
  handleClick(e) {
    //this.props.callback(this.state.id)
    console.log('svg-node clicked')
  }

  circleClicked(e) {
    this.setState({
      color: 'red'
    })
  }

  pathClicked(id) {
    this.props.callback(id)
    console.log('path clicked', id)
  }

  handleHoverStart(e) {
    this.setState({
      color: 'blue'
    })
  }

  handleHoverDone(e) {
    this.setState({
      color: 'black'
    })
  }

  render() {
    return (
      <div className='svg-node'
           onClick={this.handleClick}>
        <svg version='1.1' width='1000' height='800'
          className='scaling-calss' >
          <g id="g123" transform="translate(500.0, 400.0)">
          <g id='g234' transform='scale(2.0)'>
          { 
            this.props.data.split('Z').map((seg, index) =>
              <SVGPath key={index} id={index} data={seg+'Z'} callback={this.pathClicked} />
          )}
          </g>
          </g>
        </svg>
      </div>
    )
  }
}

export default SVGNode
