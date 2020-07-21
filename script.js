// SELECTORS
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seats:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

// FUNCTIONS
// Update Total And Count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// EVENT LISTENERS
// Movie Select Event
movieSelect.addEventListener("change", function (e) {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

// Seat Click Event
container.addEventListener("click", function (e) {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");

        updateSelectedCount();
    }
});