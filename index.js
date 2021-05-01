// Express
const express = require("express")
// The app
const app = express()
// Port
const port = 8080

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})