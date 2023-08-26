
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

// Step 3 :- Define Function to update selected count and total

function updateSelectedCount(){
    
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

    const selectedSeatsCounts = selectedSeats.length;

    count.innerText = selectedSeatsCounts;
    total.innerText = selectedSeatsCounts * ticketPrice;

    setMovieData(movieSelect.selectedIndex, movieSelect.value);

}

// Step 4 :- Define function to set selected movie data in local storage

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}

//Step 5 :- Define function to populate UI with Local Storage data

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach( (seat, index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add("selected");
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if(selectedMovieIndex != null){
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

// Step 6 :- Initial setup of count , total, and UI based on save data

populateUI();

let ticketPrice = +movieSelect.value; 

updateSelectedCount();