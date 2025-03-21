// Create eventListener to all the button
// All button should be able to play a different sound.
let w = document.querySelector(".w");
let a = document.querySelector(".a");
let s = document.querySelector(".s");
let d = document.querySelector(".d");
let j = document.querySelector(".j");
let k = document.querySelector(".k");
let l = document.querySelector(".l");

w.addEventListener("keydown", () => {
  s1.play();
});

a.addEventListener("keydown", () => {
  s2.play();
});

s.addEventListener("keydown", () => {
  s3.play();
});

d.addEventListener("keydown", () => {
  s4.play();
});

j.addEventListener("keydown", () => {
  s5.play();
});

k.addEventListener("keydown", () => {
  s6.play();
});

l.addEventListener("keydown", () => {
  s7.play();
});
