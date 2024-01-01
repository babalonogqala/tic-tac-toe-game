// player overlay
const playerConfigOverlay = document.getElementById("config-overlay");
const backDrop = document.getElementById("backdrop");

// DOM munipulation by selecting id selectors for editing player name
const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfligBtn = document.getElementById("cancel-config");
const formElement = document.querySelector("form");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);
cancelConfligBtn.addEventListener("click", closePlayerConfig);
backDrop.addEventListener("click", closePlayerConfig);
formElement.addEventListener("submit", savePlayerConfig);
