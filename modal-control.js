// MODAL CONTROLS

// show modal
var portfolio = document.querySelectorAll('.portfolio-item-box');
var modal = document.querySelector('.modal-bg');

for (var i = 0; i < portfolio.length; i++) {
  portfolio[i].addEventListener('click', function (event) {
    modalFilter(event.target.name);
    modal.classList.remove('hidden');
    body.classList.add('modal-open');
  });
}

// close modal via button
var modalClose = document.getElementsByClassName('close-button')[0];

modalClose.addEventListener('click', function () {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
});

// close modal by clicking outside modal
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

// show selected modal item
var modalItem = document.querySelectorAll('.portfolio-item');
var currentModalId = 0;

function modalFilter(modalId) {
  for (var i = 0; i < modalItem.length; i++) {
    if (modalItem[i].id === modalId) {
      currentModalId = i;
      modalItem[i].classList.remove('filtered');
    } else {
      modalItem[i].classList.add('filtered');
    }
  }
  modalButtonDisplay(currentModalId, modalItem.length - 1)
}

// modal previous and next buttons
var prevModal = document.querySelector('.modal-prev');
var nextModal = document.querySelector('.modal-next');

prevModal.addEventListener('click', function () {
  modalFilter("pf" + (currentModalId - 1));
}, false);

nextModal.addEventListener('click', function () {
  modalFilter("pf" + (currentModalId + 1));
}, false);

// remove prev or next at limit of items
function modalButtonDisplay(id, max) {
  prevModal.style.visibility = "visible";
  nextModal.style.visibility = "visible";

  if (id === 0) {
    prevModal.style.visibility = "hidden";
  } else if (id === max) {
    nextModal.style.visibility = "hidden";
  }
}