
// Step 1 :- Get references to DOM elements

const container = document.querySelector(".container");

const seats = document.querySelectorAll(".row .seat:not(.sold)");

const count = document.getElementById("count");
const total = document.getElementById("total");

const movieSelect = document.getElementById("movie");


// Step 2 :- Add Event Listener

movieSelect.addEventListener("change", e => {

    ticketPrice = +e.target.value;

    setMovieData(e.target.selectedIndex, e.target.value);

    updateSelectedCount();

});  

container.addEventListener("click", e => {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("sold")){
        e.target.classList.toggle("selected");

        updateSelectedCount();
    }
});

