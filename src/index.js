// const express = require('express')
// const app = express()
// const port = 4000
// const route = require('./routes/index')
// const handlebars = require('express-handlebars');
// const path = require('path')
// const db = require('./configDB/connectDB')
// const file = require('express-fileupload')
// const bp = require('body-parser')
// const morgan = require('morgan')

// route(app);
// db.connect();

// app.use(morgan('combined'))
// app.use(file())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, 'public')))
// app.engine('handlebars', handlebars.engine());
// app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, '/views'));


// app.listen(port, () => {
//   console.log(`App is running on http://localhost:${port}`)
// })

const path = require('path');
const express = require('express'); // require sẽ đi vào trong node_modules và lấy ra express
const app = express();

// morgan is a Node.js and Express middleware to log HTTP requests and errors
const morgan = require('morgan');
const port = 4000;
const exphbs = require('express-handlebars');
const route = require('./routes/index.js');
const db = require('./configDB/connectDB')


const fileUpLoad = require('express-fileupload')

// Connect DB

db.connect();



app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(fileUpLoad({
    createParentPath: true,
}));
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

// Use handlebars library to write code more easily

app.engine('handlebars', exphbs.engine({
    helpers: {
        sum: function(a,b){
            return a+b
        }
    }
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

route(app);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
