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
    const sectionIng = document.getElementById("section-ingredients");
    const statusName = document.querySelector(".btn-ingredients");

    if(sectionIng.className === "") {
        sectionIng.className = sectionIng.className + "hidde";
    } else {
        sectionIng.className = "";
    }

    // name status
    if(statusName.innerHTML === "esconder") {
        statusName.innerHTML = "mostrar"
    } else {
        statusName.innerHTML = "esconder";
    }

}

// hide preparation
function hiddePre() {
    const sectionPre = document.getElementById("section-preparation");
    const statusName = document.querySelector(".btn-preparation");

    if(sectionPre.className === "") {
        sectionPre.className = sectionPre.className + "hidde";
    } else {
        sectionPre.className = "";
    }

    // status name
    if(statusName.innerHTML === "esconder") {
        statusName.innerHTML = "mostrar"
    } else {
        statusName.innerHTML = "esconder";
    }
}

// hide information
function hiddeInf() {
    const sectionInf = document.getElementById("section-information");
    const statusName = document.querySelector(".btn-information");

    if(sectionInf.className === "") {
        sectionInf.className = sectionInf.className + "hidde";
    } else {
        sectionInf.className = "";
    }

    // status name
    if(statusName.innerHTML === "esconder") {
        statusName.innerHTML = "mostrar"
    } else {
        statusName.innerHTML = "esconder";
    }
}