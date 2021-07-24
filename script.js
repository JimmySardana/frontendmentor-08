const buttonOff = document.querySelector("[data-button-off]");
const buttonOn = document.querySelector("[data-button-on]");
const profile = document.getElementsByClassName("profile")[0];
const socials = document.getElementsByClassName("socials")[0];


buttonOff.addEventListener("click", () => {
    socials.style.display = "flex";
});

buttonOn.addEventListener("click", () => {
    socials.style.display = "none";
});