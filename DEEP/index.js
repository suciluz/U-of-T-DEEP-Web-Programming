var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var MongoClient = require('mongodb').MongoClient

var url = "mongodb://localhost:3000/mydb"

var app = express()
var port = 3000

var data = {
  "todos":[
    "I'm a todo",
    "So can you",
    "what about me?",
    "Not really tho..."
  ]
}
//users, a data object

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))// middleware

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//bodyparser is a middleware

app.get('/', (req, res) => {
  res.send("Not configured to host w webpage. Configured for use as API")
})
//myData is going to be referred to as ejs
//data is the actual object
//without this data, html doesn't work.

app.post('/API/data', (req, res) => {
  const incomingData = req.body
  data.todos.push(incomingData.newToDo)
})
// console.log(incomingData.newToDo
// res.send(incomingData)

app.get('/API/data', (req, res) => {
  res.send(data)
  console.log("Hey, what u doing.")
}) //created an API endpoint


app.listen(port, () => {
  console.log("Server started on port 3000...")
})
//express is handling the html by using ejs. can't double click the ejs file.

// MongoClient.connect(url, (err, db) => {
//   if(err) {
//     throw err
//   }
//   console.log("Database created.")
//   db.close()
// })
