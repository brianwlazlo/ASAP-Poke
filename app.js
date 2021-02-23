function closeMenu(x) {
  x.classList.toggle('show');
  $('.menu-icon').toggleClass('change');
}

function transformMenu(x) {
  x.classList.toggle("change");
  $('.nav-links').toggleClass('show');
}
