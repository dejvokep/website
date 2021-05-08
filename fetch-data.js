// HTTPS module
const https = require("https");

// Variables for API data fetch
// TODO: GitHub repository sync
let pluginDownloads = 0, projects = 32, averageStars = 0;
// Download URLs
let downloadURL = new Map();
// Page URLs
let pageURL = new Map();

// Module export functions
module.exports = {

    // Returns amount of plugin downloads
    getPluginDownloads: function() {
        return pluginDownloads;
    },

    // Returns the amount of projects
    getProjects: function() {
        return projects;
    },

    // Returns average stars in reviews
    getAverageStars: function() {
        return averageStars;
    },

    // Returns download URL of plugin specified by the ID
    getDownloadURL: function(pluginId) {
        return downloadURL.get(pluginId);
    },

    // Returns project page URL of plugin specified by the ID
    getPageURL: function(pluginId) {
        return pageURL.get(pluginId);
    }
};

// Request options for Spiget API
const requestOptions = {
    host: "api.spiget.org",
    port: 443,
    path: "/v2/authors/387302/resources",
    method: "GET"
}

// Handles response data
function handleResponse(response) {
    // Encoding
    response.setEncoding("utf8");
    // Data chunks
    let data = "";
    // On data receive
    response.on("data", function(chunk) {
        data += chunk;
    });
    // On response data chunk read end
    response.on("end", function() {
        processData(data);
    });
}

// Handles errors
function handleError(error) {
    console.log(error);
}

// Processes finalized data
function processData(data) {
    // Reset
    averageStars = 0;
    pluginDownloads = 0;
    // JSON object
    const json = JSON.parse(data);
    // For each plugin
    json.forEach(element => {
        // Add downloads and average stars
        pluginDownloads += element.downloads;
        averageStars += element.rating.average;
        // Set the download and page URL
        downloadURL.set(element.id, "https://spigotmc.org/" + element.file.url);
        pageURL.set(element.id, "https://spigotmc.org/resources/" + element.id);
    });
    // Calculate and round average stars
    averageStars = Math.round(averageStars / json.length);
}

// Requests data from Spiget API
function request() {
    // Create request
    let request = https.request(requestOptions, handleResponse);
    // Add handler
    request.on("error", handleError);
    // End
    request.end();
}

// Run the request
request();
// Run every 10 minutes
setInterval(request, 600000);