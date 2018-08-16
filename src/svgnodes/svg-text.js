import React, { Component } from 'react'
import './svg-node.css'

class SVGNode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(e) {
    this.props.callback(this.state.id)
  }

  render() {
    return (
      <div key={this.props.id} 
           className='svg-node'
           onClick={this.handleClick}>
        {this.props.data}
      </div>
    )
  }
}

export default SVGNode
