var button = document.querySelector("button");
    button.addEventListener("click", function() {
  if (this.textContent == "ON") {
    this.textContent = "OFF";
  } else {
    this.textContent = "ON";
  }
  const letters = document.querySelectorAll("li");
    for (var i = 0; letters.length > i; i++) {
        letters[i].classList.toggle("off");
  }
})