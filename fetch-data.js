const https = require("https");
const fs = require("fs");
const { json } = require("express");

let pluginDownloads = 0, projects = 6, averageStars = 0;
const downloadURL = new Map();
module.exports = {
    getPluginDownloads: function() {
        return pluginDownloads;
    },

    getProjects: function() {
        return projects;
    },

    getAverageStars: function() {
        return averageStars;
    },

    getDownloadURL: function(pluginId) {
        return downloadURL.get(pluginId);
    }
};

const requestOptions = {
    host: "api.spiget.org",
    port: 443,
    path: "/v2/authors/387302/resources",
    method: "GET"
}

function handleResponse(response) {
    response.setEncoding("utf8");
    let data = "";
    response.on("data", function(chunk) {
        data += chunk;
    });
    response.on("end", function() {
        processData(data);
    });
}
function handleError(error) {
    console.log(error);
}
function processData(data) {
    averageStars = 0;
    pluginDownloads = 0;
    const json = JSON.parse(data);
    json.forEach(element => {
        pluginDownloads += element.downloads;
        averageStars += element.rating.average;
        downloadURL.set(element.id, "https://spigotmc.org/" + element.url);
    });
    averageStars = Math.round(averageStars / json.length);
}
function request() {
    console.log("request")
    let request = https.request(requestOptions, handleResponse);
    request.on("error", handleError);
    request.end();
}
console.log("run")
request();
setInterval(request, 600000);
console.log("end")