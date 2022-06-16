let container = document.querySelector("#container");
let replay = document.querySelector(".replay");
replay.style.display = "none";
const cards_length = 16;
const cards = [];

let firstClickedCard = "";
let winCount = 0;
let icons = ["laugh", "camera", "moon", "car", "star", "phone", "user", "home"];
icons.push(...icons);

for (let i = 0; i <= 100; i++) {
  const idx1 = Math.floor(Math.random() * cards_length);
  const idx2 = Math.floor(Math.random() * cards_length);

  const temp = icons[idx1];
  icons[idx1] = icons[idx2];
  icons[idx2] = temp;
}

let oi = 0;
icons.forEach((item) => {
  oi++;
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.innerHTML = `
<div class="front">
    <i class='bx bx-${item}' id=${oi}></i>
</div>
<div class='back'><p>Click me </p> </div>
`;

  // let secondClickedCard = false;

  cardEl.addEventListener("click", () => {
    // add transform rotateY class
    if (!cardEl.classList.contains("hover-card")) {
      cardEl.classList.add("hover-card");
    }

    if (firstClickedCard == "") {
      firstClickedCard = cardEl;
    } else {
      // get icons className here
      let iconOne = firstClickedCard.querySelector("i").classList[1];
      let iconTwo = cardEl.querySelector("i").classList[1];
      let iconOneID = firstClickedCard.querySelector("i").id;
      let iconTwoID = cardEl.querySelector("i").id;

      if (iconOne !== iconTwo || iconOneID == iconTwoID) {
        const tempt = firstClickedCard;
        setTimeout(() => {
          tempt.classList.remove("hover-card");
          cardEl.classList.remove("hover-card");
        }, 1000);
      } else {
        winCount++;
        console.log(winCount);

        const tempt = firstClickedCard;
        setTimeout(() => {
          tempt.classList.add("opened-iconBox");
          cardEl.classList.add("opened-iconBox");
          if (winCount === 8) {
            alert("you win");
            replay.style.display = "block";
          }
        }, 1000);
      }
      firstClickedCard = "";
    }
  });
  container.appendChild(cardEl);
});
