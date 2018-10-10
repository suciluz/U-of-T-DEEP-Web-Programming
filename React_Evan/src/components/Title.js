import React, {Component} from 'react'
import styles from './css/title.css'

class Title extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className = {styles.title} onClick = {this.props.onClick}>
        <h1> {this.props.title} </h1>
      </div>
    )
  }
}

export default Title

//modular programming at its core
//default -> highest level component
//onClick is just an event handler for HTML, not react
