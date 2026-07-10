// ===============================
// TASKFLOW - MAIN JAVASCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // ACTIVE MENU
    // ===============================

    const currentPage = window.location.pathname.split("/").pop();

    const links = document.querySelectorAll(".menu a");

    links.forEach(link => {

        if (link.getAttribute("href") === currentPage) {

            link.parentElement.classList.add("active");

        }

    });



    // ===============================
    // DARK MODE
    // ===============================

    const darkBtn = document.querySelector(".fa-moon");

    if (darkBtn) {

        darkBtn.onclick = function () {

            document.body.classList.toggle("dark");

        };

    }



    // ===============================
    // TASK MODAL
    // ===============================

    const modal = document.getElementById("taskModal");

    const cards = document.querySelectorAll(".task-card");

    const closeBtn = document.querySelector(".close");

    if (modal) {

        cards.forEach(card => {

            card.addEventListener("click", function () {

                modal.style.display = "flex";

            });

        });

        if (closeBtn) {

            closeBtn.onclick = function () {

                modal.style.display = "none";

            };

        }

        window.onclick = function (e) {

            if (e.target === modal) {

                modal.style.display = "none";

            }

        };

    }



    // ===============================
    // NEW TASK BUTTON
    // ===============================

    const newTask = document.querySelector(".nav-right button");

    if (newTask) {

        newTask.onclick = function () {

            alert("New Task feature will be connected to the backend.");

        };

    }



    // ===============================
    // SEARCH
    // ===============================

    const search = document.querySelector(".search input");

    if (search) {

        search.addEventListener("keyup", function () {

            const value = search.value.toLowerCase();

            const cards = document.querySelectorAll(".task-card,.project-card,.card");

            cards.forEach(card => {

                if (card.innerText.toLowerCase().includes(value)) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }



    // ===============================
    // CARD ANIMATION
    // ===============================

    const allCards = document.querySelectorAll(
        ".card,.project-card,.task-card,.analytics-card"
    );

    allCards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", function () {

            card.style.transform = "translateY(0px)";

        });

    });



    // ===============================
    // PAGE LOAD EFFECT
    // ===============================

    document.body.style.opacity = "0";

    setTimeout(function () {

        document.body.style.transition = "0.5s";

        document.body.style.opacity = "1";

    }, 100);

});