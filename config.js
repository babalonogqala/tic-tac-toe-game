// logic for config
function openPlayerConfig() {
  playerConfigOverlay.style.display = "block";
  backDrop.style.display = "block";
}

// close the overlay register player bar
function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backDrop.style.display = "none";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername");
  console.log(enteredPlayerName);
}
