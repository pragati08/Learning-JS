//Create you project here from scratch
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];
// Use moviesList array for displaing the Name in the dropdown menu

const dropdownEl = document.querySelector("#selectMovie");
let movieTitle = document.querySelector("#movieName");
let moviePrice = document.querySelector("#moviePrice");
let priceEachTicket = moviesList[0].price;

moviesList.forEach((movie) => {
  let option = document.createElement("option");
  option.innerHTML = `${movie.movieName} $ ${movie.price}`;
  dropdownEl.appendChild(option);
  option.classList.add("movie-option");
});

dropdownEl.addEventListener("change", () => {
  let movieSelected =
    dropdownEl.options[dropdownEl.selectedIndex].textContent.split(" ")[0];
  if (movieSelected === "Flash") {
    movieTitle.textContent = moviesList[0].movieName;
    moviePrice.textContent = `$ ${moviesList[0].price}`;
    priceEachTicket = moviesList[0].price;
  } else if (movieSelected === "Spiderman") {
    movieTitle.textContent = moviesList[1].movieName;
    moviePrice.textContent = `$ ${moviesList[1].price}`;
    priceEachTicket = moviesList[1].price;
  } else {
    movieTitle.textContent = moviesList[2].movieName;
    moviePrice.textContent = `$ ${moviesList[2].price}`;
    priceEachTicket = moviesList[2].price;
  }
});

const SeatContainer = document.querySelector("#seatCont");
const seatArr = SeatContainer.querySelectorAll(".seat");
let numberOfSeats = document.querySelector("#numberOfSeat");
let ticketPrice = document.querySelector("#totalPrice");
let number = 0;
let continueBtn = document.querySelector("#proceedBtn");
let cancelBtn = document.querySelector("#cancelBtn");
let selectedSeatHolder = document.querySelector(".selectedSeatsHolder");

let selectedSeats = [];

seatArr.forEach((seat, index) => {
  seat.addEventListener("click", () => {
    if (seat.classList.contains("occupied")) {
      return;
    }

    seat.classList.toggle("selected");

    if (seat.classList.contains("selected")) {
      selectedSeats.push(index + 1);
    } else {
      selectedSeats = selectedSeats.filter(
        (seatNumber) => seatNumber !== index + 1
      );
    }

    updateSelectedSeatsDisplay();
    updateSeatCountAndPrice();
  });
});

function updateSelectedSeatsDisplay() {
  selectedSeatHolder.innerHTML =
    selectedSeats.length > 0
      ? ""
      : "<span class='noSelected'>No Seat Selected</span>";
  selectedSeats.forEach((seatNumber) => {
    const seatElement = document.createElement("span");
    seatElement.classList.add("selectedSeat");
    seatElement.textContent = seatNumber;
    selectedSeatHolder.appendChild(seatElement);
  });
}

function updateSeatCountAndPrice() {
  numberOfSeats.textContent = selectedSeats.length;
  ticketPrice.textContent = `$ ${selectedSeats.length * priceEachTicket}`;
}

//Add eventLsiter to continue Button
continueBtn.addEventListener("click", () => {
  selectedSeats.forEach((seatNumber) => {
    const seat = seatArr[seatNumber - 1];
    seat.classList.add("occupied");
    seat.classList.remove("selected");
  });

  alert("Yayy! Your seat has been booked!");
  selectedSeats = [];
  updateSelectedSeatsDisplay();
  updateSeatCountAndPrice();
});

//Add eventListerner to Cancel Button
cancelBtn.addEventListener("click", () => {
  selectedSeats.forEach((seatNumber) => {
    const seat = seatArr[seatNumber - 1];
    seat.classList.remove("selected");
  });

  selectedSeats = [];
  updateSelectedSeatsDisplay();
  updateSeatCountAndPrice();
});
