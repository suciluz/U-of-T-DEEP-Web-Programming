import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';

  const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "80vw",
  },
  flex: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "80vw",
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  textFieldContainer: {
    width: "100%",
    display: 'flex',
    justifyContent: 'center'
  },
  todoItemContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

class MyMaterialApp extends Component{
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      newToDo: ""
    }
  }

  addToDo = () => {
      var _todos = this.state.todos
      _todos.push(this.state.newToDo)

      fetch('http://localHost:3000/API/data', {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(this.state), // body data type must match "Content-Type" header
      })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
        })
      this.setState({todos: _todos})
  }

  fetchData = () => {
    fetch('http://localHost:3000/API/data')
      .then( (response) => {
        return response.json()
      })
      .then( (data) => {
        this.setState({todos: data.todos})
      })
  }

  //fetch, .then, .then the argument passed in = whatever sent from the previous function

  deleteToDo = (index) => {
    var _todos = this.state.todos
    _todos.splice(index,1)
    this.setState({todos: _todos})
  }

  textChange = (text) => {
    this.setState({newToDo: text.target.value})
  }

  render() {
    const {classes} = this.props
    return(
      <div>
        <Paper className={classes.root} elevation={15}>
          <AppBar position="static" color="secondary" >
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon/>
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                To do List Website
              </Typography>
              <Button onClick = {this.fetchData} color="primary" className={classes.button}>
                Fetch my data from server
              </Button>
            </Toolbar>
          </AppBar>
          <br></br>
          <div className = {classes.textFieldContainer}>
          <TextField
            onChange = {this.textChange}
            id="newToDo"
            label="What would you like to do?"
            placeholder="Please type your to do."
            className={classes.textField}
            margin="normal"
          />
          <Button onClick = {this.addToDo} variant="fab" color="primary" aria-label="Add" className={classes.button}>
           <AddIcon/>
          </Button>
          </div>
          {this.state.todos.map((todo, index) =>
            <div className = {classes.todoItemContainer} key={index}>
              <Typography component="p">
                {index+1+". "+todo}
              </Typography>
              <Button index ={index} onClick = {() => {this.deleteToDo(index)}} variant="contained" color="primary" className={classes.button}>
                Delete
                <DeleteIcon className={classes.rightIcon} />
              </Button>
            </div>
          )}
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(MyMaterialApp);
//meterial ui is predefining the css part with withsyles

//assigning an index prop
//you can't call a function with an onClick, you can only reference it.
//so the way you get around this is by using arrow function
//underscore indicates a copy of something

/*arrow function purpose:
binds this
set up a reference to a return function
arrow function will return something form default
*/
