const { response, request } = require("express");
const express = require("express");
const nunjucks = require("nunjucks");
const data = require("./data");

const server = express();

server.use(express.static("public"));
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get("/", function(request, response) {
    return response.render("foodfy",{items: data});
});

server.get("/about", function(request, response) {
    const about = {
        infos: [
            {
                name_title: "Sobre o Foodfy",
                paragraph1: "Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.",
                paragraph2: " Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod."
            },

            {
                name_title: "Como tudo começou...",
                paragraph1: "Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.",
                paragraph2: " Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod."
            },

            {
                name_title: "Nossas receitas",
                paragraph1: "Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.",
                paragraph2: " Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod."
            }
        ]
        
    }

    return response.render("about", {about: about});
});

server.get("/revenues", function(request, response) {
    return response.render("revenues", {items: data});
});

// server.get("/recipes/:id", function(request, response) {
//     const id = request.params.id;

//     const recipes = data.find(function(recipes) {
//         if(recipes.id == id) {
//             return true;
//         };
//     });

//     if(!recipes) {
//         return response.render("not-found");
//     }

//     return response.render("recipes", {items: recipes});
// });

server.get("/recipes/:index", function(request, response) {
    const recipes = data;
    const recipeIndex = request.params.index;
    let recipesItems = (recipes[recipeIndex]);

    if(recipesItems == undefined) {
        return response.render("not-found");
    }

    // console.log({items: recipesItems})

    return response.render("recipes", {items: recipesItems});
});

server.use(function(request, response) {
    response.status(404).render("not-found");
});

server.listen(5000, function() {
    console.log("Server is running");
});

// server.get("/recipes/:index", function (request, response) {
//     const recipes = []; // Array de receitas carregadas do data.js
//     const recipeIndex = request.params.index;



//     return response.render("recipes", {items: recipeIndex});
//     // console.log(data.recipes[0].id);
// });