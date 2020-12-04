const cards = document.querySelectorAll('.card');
function addActive(card) {
  card.classList.add('active');
}
function removeActive() {
  cards.forEach(card => {
    if (card.classList.contains('active')) {
      card.classList.remove('active');
    }
  });
}
cards.forEach(card => {
  card.addEventListener('click', () => {
    removeActive();
    addActive(card);
  });
});