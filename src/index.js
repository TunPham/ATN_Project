const express = require('express')
const app = express()
const port = 3000
const route = require('./routes/index')
const handlebars  = require('express-handlebars');
const path = require('path')

route(app);

app.use(express.json())

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));


app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})

