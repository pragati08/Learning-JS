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
let seatNumber = [];

seatArr.forEach((seat, index) => {
  seat.addEventListener("click", () => {
    if (seat.classList.contains("occupied")) {
    } else {
      console.log(index);
      seat.classList.toggle("selected");
      number++;
      numberOfSeats.textContent = number;
      totalPrice = priceEachTicket * number;
      ticketPrice.textContent = `$ ${totalPrice}`;
      showSeatNumber(seat, index + 1);
    }
  });
});

function showSeatNumber(seat, i) {
  if (seat.classList.contains("selected")) {
    console.log("in if");
    seatNumber = document.createElement("span");
    selectedSeatHolder.appendChild(seatNumber);
    seatNumber.innerHTML = i;
    seatNumber.classList.add("selectedSeat");
  } else {
    console.log("in elses");
    seatNumber.remove();
  }
}

continueBtn.addEventListener("click", () => {
  seatArr.forEach((seat) => {
    if (seat.classList.contains("selected")) {
      seat.classList.add("occupied");
      seat.classList.remove("selected");
    }
  });
  alert("Yayy! Your seat has been booked!");
  totalPrice = 0;
  number = 0;
  ticketPrice.textContent = `$ ${totalPrice}`;
  numberOfSeats.textContent = number;
});

cancelBtn.addEventListener("click", () => {
  seatArr.forEach((seat) => {
    if (seat.classList.contains("selected")) {
      seat.classList.remove("selected");
    }
  });

  totalPrice = 0;
  number = 0;
  ticketPrice.textContent = `$ ${totalPrice}`;
  numberOfSeats.textContent = number;
});

//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button
/* <span class="selectedSeat">55</span> */
