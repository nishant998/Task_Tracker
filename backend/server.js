const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
require('./routes/API_routes')(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})