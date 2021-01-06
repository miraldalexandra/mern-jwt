const express = require('express');
const path = require("path");
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const { cors } = require("./middleware/cors");
const { dbURI } = require("./config");
//const ReactDOMServer = require('react-dom/server');
//const App = require('../client/src/App')

const app = express();

// middleware
// app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(cors);
app.get('*', cors, checkUser);
app.use(express.static("../client/build"))


app.get("/", (req, res, next) => {
  //res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

app.use("/api/auth", cors, require("./routes/authRoutes"))

// view engine
// app.set('view engine', 'ejs');

// app.use('/client/public', express.static(__dirname + '/client/public'));
// app.use('/public', express.static(__dirname + '/public'));
// console.log("express.static(__dirname + '/public'):", express.static(__dirname + '/public'))

//console.log("dirname", __dirname + "./client/public/index.html")
//console.log( res.sendFile('build/index.html', { root: __dirname }))
//console.log("path:", path.join(__dirname, '../'))

//const appIndexPath = path.join(__dirname, '../client/public/index.html');


// routes

//app.get('*', cors)
// app.get('/', (req, res) => res.render('home'));
// app.get('/recipes', requireAuth, (req, res) => res.render('smoothies'));
// app.use(authRoutes);

//app.use('/', );
//app.get("/", function(req, res){
// res.sendFile(path.resolve(__dirname),"../client/build/index.html") // cors fav
// res.sendFile(path.resolve(__dirname, "../client", "build", "index.html")) // mime
// res.sendFile(path.join(__dirname), '../client/build/index.html'); // cors fav
// res.sendFile(path.join(__dirname, '../client/build/index.html')) // mime

// res.sendFile(__dirname + "index.html");

// res.sendFile('client/public/index.html', { root: __dirname })
// res.sendFile(path.resolve(__dirname), "../client/public/index.html")
// res.sendFile(path.resolve(__dirname, "../client/public/index.html"))
//})


/*
app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />);
  
    const indexFile = path.resolve(appIndexPath);
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  });
  
  app.use(express.static('./build'));
*/

/*
let renderReact = require('./renderReact.js');
renderReact(app);
*/

// database connection
/*
// one way of mongoose connection with server listener together
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
 .then((result) => {
     app.listen(3000)
    })
 .catch((err) => console.log(err));
*/

// another way of mongoose connection
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
mongoose.set('useCreateIndex', true)
mongoose.connection.on("error", (err) => console.log(err))
mongoose.connection.on("open", () => console.log("database connected"))

// server listener
const port = 3002
app.listen(port, () => {
  console.log(`Server has been started on port: ${port}`)
})
