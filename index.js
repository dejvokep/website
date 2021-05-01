// Express
const express = require("express");
const { getPluginDownloads, getProjects, getAverageStars, getDownloadURL } = require("./fetch-data");
const data = require("./fetch-data");
// The app
const app = express()
// Port
const port = 8080

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("home", {plugin_downloads: getPluginDownloads(), projects: getProjects(), average_stars: getAverageStars(), repairitem_download: getDownloadURL(55890), clickspersecond_download: getDownloadURL(57214), securednetwork_download: getDownloadURL(65075)})
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})