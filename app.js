const openBtns = document.querySelectorAll(".open-btn");
const questionCards = document.querySelectorAll(".question-card");

questionCards.forEach(card => {
  const cardBody = card.querySelector(".card-body");
  const openBtn = card.querySelector(".card-title .open-btn");
  // All open buttons add event listeners
  openBtn.addEventListener("click", (e) => {
    cardBody.classList.toggle("show-desc");
    e.currentTarget.classList.toggle("active");
    // close all other open cards
    questionCards.forEach(function(card) {
      const cardBtn = card.querySelector(".card-title .open-btn");
      const currentBtn = e.currentTarget;
      if (cardBtn !== currentBtn) {
        card.querySelector(".card-body")
          .classList
          .remove("show-desc");
        cardBtn.classList.remove("active");
      }
    });
  });
});