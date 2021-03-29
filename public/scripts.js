// modal functionality
const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

// modal info
const modalH3 = document.querySelector("h3");
const modalSpan = document.querySelector(".name-chef");

for(let card of cards) {
    card.addEventListener("click", function() {
        /* modal functionality*/
        const imgId = card.getAttribute("id");

        modalOverlay.classList.add("active");

        modalOverlay.querySelector("img").src = `../assets/${imgId}`;

        /* modal card */
        const cardH4 = card.querySelector("h4").textContent;
        const cardP = card.querySelector("p").textContent;
        
        /* modal info */
        modalH3.innerHTML = cardH4;
        modalSpan.innerHTML = cardP;
    });
};

// close modal
document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active");
});


// menu responsive
function myfunction() {
    const myNav = document.getElementById("myNav");

    if(myNav.className === "nav") {
        myNav.className = myNav.className + " responsive";
    } else {
        myNav.className = "nav";
    };

    const myBanner = document.getElementById("myBanner");

    if(myBanner.className == "banner-content") {
        myBanner.className = myBanner.className + " nav-top";
    } else {
        myBanner.className = "banner-content";
    }
};