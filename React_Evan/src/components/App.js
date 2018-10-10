import React, {Component} from 'react'
import Text from './Text'
import Title from './Title'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      title: "ABCDEFGH",
      description: "Oy, I'm a description",
    }
    //state is an object (written in json). React is watching for every state component and is looking for changes
  } //the very first thing that gets called

  stateMyChange = () => {
    console.log("My change is stating.  ..")
    if(this.state.title == "ABCDEFGH") {
    this.setState({title: "WXYZAB"})
  } else if(this.state.title =="WXYZAB") {
    this.setState({title: "ABCDEFGH"})
  }
  }//the arrow function binds the this. to the app.

  render() {
    return(
      <div>
        <Title onClick = {this.stateMyChange} title = {this.state.title}/>
        <Text text = {this.state.description}/>
        <h1>dfdf</h1>
      </div>
    )
  }
  //every single react component must have the render function
  //render can only return 1 div.
  //onClick, title => props
  //HTML tags are lowercase, react tags are uppercase
}

export default App

/*State changes based on variables and data <--> Props are inherited & immutable
main component (app) -> sends props to the text

first render -> getInitialState (constructor) -> componentWillMount -> render > componentDidMount
evrytime a state changes, the app rerenders!!

the language is JSX  (JS+CSS)
*/

//<button onClick={this.stateMyChange}> Click me! </button>


//<h1 onClick ={this.stateMyChange} > {this.state.title} </h1> //{} tells you its using javascript inside html
//<p> {this.state.description}</p>

/*
App has states: title, description
App is passing down the title, some function to title. is passing down the description to text.
By clicking the title, the title does not change in itself but it goes through the app function. title does not have the ability to update itself.
*/
