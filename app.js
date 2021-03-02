function toggleMenu() {
  let menu = document.querySelector('.menu');
  let close = document.querySelector('.close');
  let menuView = document.querySelector('.menu__toggle');

  menu.classList.toggle('active');
  close.classList.toggle('active');
  menuView.classList.toggle('active');
}
