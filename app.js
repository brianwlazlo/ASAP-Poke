function transformMenu(x) {
  x.classList.toggle("change");
  $('.nav-links').toggleClass('hide');
}

function closeMenu(x) {
  x.classList.toggle('hide');
  $('.menu-icon').toggleClass('change');
}