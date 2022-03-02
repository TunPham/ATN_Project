const express = require('express')
const app = express()
const port = 4000
const route = require('./routes/index')
const handlebars = require('express-handlebars');
const path = require('path')
const db = require('./configDB/connectDB')

route(app);
db.connect();

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));


app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})

