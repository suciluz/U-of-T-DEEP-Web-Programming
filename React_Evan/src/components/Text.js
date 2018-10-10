import React, {Component} from 'react'

class Text extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <p>{this.props.text} </p>
    )
  }
}

export default Text

//any html tags can be returned, but to send multiple elements, you need to have divs.
