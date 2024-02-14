const giti = document.querySelector(".giti");
giti.addEventListener("click", goToGit);
function goToGit() {
  window.open("https://github.com/Arostet");
}
const linkedIn = document.querySelector(".linkedini");
linkedIn.addEventListener("click", goToLinkedini);
function goToLinkedini() {
  window.open("https://www.linkedin.com/in/micha-aron-stettin-095841149/");
}

const iconClass = document.querySelectorAll(".iconClass");

function sheen() {
  for (let icon of iconClass) {
    icon.addEventListener("mouseover", function () {
      this.classList.add("sheen");
    });

    icon.addEventListener("mouseout", function () {
      this.classList.remove("sheen");
    });
  }
}
sheen();
