// Express
const express = require("express");
// Fetch data module
const data = require("./fetch-data");
// The app
const app = express()
// Port
const port = 8080

// Set views directory
app.set('views', './views')
// Set view engine
app.set('view engine', 'pug')
// Set static file directory
app.use(express.static('public'))

// Handle home requests
app.get("/", (req, res) => {
    // Render
    res.render("home", 
    {
        time: Date.now(),
        plugin_downloads: data.getPluginDownloads(),
        projects: data.getProjects(),
        average_stars: data.getAverageStars(),
        repairitem: {
            download: data.getDownloadURL(55890),
            page: data.getPageURL(55890),
            docs: "https://davidcubesvk.com/wiki/plugin/RepairItem/"
        }, 
        clickspersecond: {
            download: data.getDownloadURL(57214),
            page: data.getPageURL(57214),
            docs: "https://davidcubesvk.com/wiki/plugin/ClicksPerSecond/"
        },
        securednetwork: {
            download: data.getDownloadURL(65075),
            page: data.getPageURL(65075),
            docs: "https://davidcubesvk.com/wiki/plugin/SecuredNetwork/"
        }
    })
})

// Create the server
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})