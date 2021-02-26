function handleMenuClick () {
  $('.menu-icon').click(function() {
    $('.menu-icon').toggleClass('change');
    $('.nav-links').toggleClass('show');
  })
}

$(handleMenuClick);

function handleCloseMenu() {
  $('.nav-links').click(function(x) {
    $(this).toggleClass('show');
    $('.menu-icon').toggleClass('change');
  })
}

$(handleCloseMenu);


function displayFormData(name, email, phone, birthday, zip) {
  let formArr = [name, email, phone, birthday, zip];
  let formObject = {
    FullName: name,
    Email: email,
    Tel: phone,
    Birthday: birthday,
    ZipCode: zip,
  }
  console.log(formArr)
  console.log(formObject);

  clearForm();
}

function clearForm () {
  $('#name').val('');
  $('#email').val('');
  $('#tel').val('');
  $('#birthday').val('');
  $('#zip-code').val('');
}

function validateZip (zip) {
  let isValid = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);
  if (!isValid) {
    alert('Please Enter Valid Zip Code')
  }
}

function handleOrderBtn () {
  $('.js-order-btn').click(function () {
    console.log("Make call to ChowNow API");
  })
}

$(handleOrderBtn);

function watchForm() {
  $('#newsletter-form').submit(event => {
    event.preventDefault();
    let name = $('#name').val();
    let email = $('#email').val();
    let phone = $('#tel').val();
    let birthday = $('#birthday').val();
    let zip = $('#zip-code').val();
    displayFormData (name, email, phone, birthday, zip);
    validateZip(zip);
  })
};

$(function() {
  console.log('Form Ready');
  watchForm();
});