const { response } = require("express");
const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.use(express.static("public"));
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server
});

server.get("/", function(require, response) {
    return response.render("foodfy");
});

server.get("/about", function(require, response) {
    return response.render("about");
});

server.get("/revenues", function(require, response) {
    return response.render("revenues");
});

server.use(function(require, response) {
    response.status(404).render("not-found");
});

server.listen(5000, function() {
    console.log("Server is running");
});