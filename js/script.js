// prealoader
$(document).ready(() => {
  $('#preloader').fadeOut();
});

// back to top
$('.back-to-top').click(() => {
  window.scrollTo(0, 0);
});

// theme toggl
const body = $(document.body);
let darkToggleOn = JSON.parse(localStorage.getItem('isDarkTheme'));

function changeOnDark() {
  $('.logo__img').attr('src', './img/logo-light.png');
  $('.theme-icon').removeClass('fa-sun');
  $('.theme-icon').addClass('fa-moon');
}

function changeOnLight() {
  $('.logo__img').attr('src', './img/logo-dark.png');
  $('.theme-icon').removeClass('fa-moon');
  $('.theme-icon').addClass('fa-sun');
}

if (darkToggleOn) {
  body.addClass('dark-theme');
  changeOnDark();
}

$('.theme-toggle').click(() => {
  darkToggleOn = !darkToggleOn;
  localStorage.setItem('isDarkTheme', darkToggleOn);
  body.toggleClass('dark-theme');

  if (darkToggleOn) {
    changeOnDark();
  } else {
    changeOnLight();
  }
});

// search toggle
$('.search-toggle').click((e) => {
  $('.search-container').toggleClass('search-box-show');
});
