const cards = document.querySelectorAll(".card");

// modal info
// const modalH3 = document.querySelector("h3");
// const modalSpan = document.querySelector(".name-chef");

for(let card of cards) {
    card.addEventListener("click", function() {
        /* modal functionality*/
        const imgId = card.getAttribute("id");

        window.location.href = `/recipes/${imgId}`;


        // modalOverlay.classList.add("active");

        // modalOverlay.querySelector("img").src = `../assets/${imgId}`;

        // /* modal card */
        // const cardH4 = card.querySelector("h4").textContent;
        // const cardP = card.querySelector("p").textContent;
        
        // /* modal info */
        // modalH3.innerHTML = cardH4;
        // modalSpan.innerHTML = cardP;
    });
};

// close modal
// document.querySelector(".close-modal").addEventListener("click", function() {
//     modalOverlay.classList.remove("active");
// });


// menu responsive
function navbar() {
    const myNav = document.getElementById("myNav");

    if(myNav.className === "nav") {
        myNav.className = myNav.className + " responsive";
    } else {
        myNav.className = "nav";
    };

    const topSpace = document.getElementById("top-space");

    // if(topSpace.className === "banner-content") {
    //     topSpace.className = topSpace.className + " nav-top";
    // } else {
    //     topSpace.className = "banner-content";
    // }

    if(topSpace.className === "banner-content" || topSpace.className === "recipes-image") {
        topSpace.className = topSpace.className + " nav-top";
    } else if(topSpace.className === "banner-content nav-top") {
        topSpace.className = "banner-content";
    } else if (topSpace.className === "recipes-image nav-top") {
        topSpace.className = "recipes-image";
    }
};

function hiddeIng() {
    const sectionIng = document.getElementById("section-ingredients");
    const statusName = document.querySelector(".btn-ingredients");

    if(sectionIng.className === "") {
        sectionIng.className = sectionIng.className + "hidde";
    } else {
        sectionIng.className = "";
    }

    // status name
    if(statusName.innerHTML === "esconder") {
        statusName.innerHTML = "mostrar"
    } else {
        statusName.innerHTML = "esconder";
    }

}

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