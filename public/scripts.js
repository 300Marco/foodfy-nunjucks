const cards = document.querySelectorAll(".card");

for(let card of cards) {
    card.addEventListener("click", function() {
        /* modal functionality*/
        const idIngredients = card.getAttribute("id");
        
        window.location.href = `/recipes/${idIngredients}`;
    });
};


// responsive menu
function navbar() {
    const myNav = document.getElementById("myNav");

    if(myNav.className === "nav") {
        myNav.className = myNav.className + " responsive";
    } else {
        myNav.className = "nav";
    };

    const topSpace = document.getElementById("top-space");


    // Temporary code to fix the CSS
    if(topSpace.className === "banner-content" || topSpace.className === "recipes-image") {
        topSpace.className = topSpace.className + " nav-top";
    } else if(topSpace.className === "banner-content nav-top") {
        topSpace.className = "banner-content";
    } else if (topSpace.className === "recipes-image nav-top") {
        topSpace.className = "recipes-image";
    }
};

// hide ingredients
function hiddeIng() {
    const sectionIngredients = document.getElementById("section-ingredients");
    const statusName = document.querySelector(".btn-ingredients");

    // Modifying name within span and adding class to div
    if(statusName.innerHTML === "esconder") {
        statusName.innerHTML = "mostrar"
        sectionIngredients.className += "hidde";
    } else {
        statusName.innerHTML = "esconder";
        sectionIngredients.className = "";
    }

}

// hide preparation
function hiddePre() {
    const sectionPreparation = document.getElementById("section-preparation");
    const statusName = document.querySelector(".btn-preparation");

    // Modifying name within span and adding class to div
    if(statusName.innerHTML === "esconder") {
        statusName.innerHTML = "mostrar";
        sectionPreparation.className += "hidde";
    } else {
        statusName.innerHTML = "esconder";
        sectionPreparation.className = "";
    }
}

// hide information
function hiddeInf() {
    const sectionInfo = document.getElementById("section-information");
    const statusName = document.querySelector(".btn-information");

    // Modifying name within span and adding class to div
    if(statusName.innerHTML === "esconder") {
        statusName.innerHTML = "mostrar";
        sectionInfo.className += "hidde";
    } else {
        statusName.innerHTML = "esconder";
        sectionInfo.className = "";
    }
}