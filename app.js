function handleMenuClick () {
  $('.menu-icon, .nav-links').click(function() {
    $('.menu-icon').toggleClass('change');
    $('.nav-links').toggleClass('show');
  })
}


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

}

function clearForm () {
  $('.newsletter-form-container').hide();
  $('#form-response').removeClass('hide').append('<p>Succes! Form Submitted!</p>');

}

function validateZip (name, email, phone, birthday, zip) {
  let isValid = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);
  if (!isValid) {
    $('#form-validation').append('<p>Please Enter A Valid Zip Code</p>').removeClass('hide');
  } else {
    displayFormData(name, email, phone, birthday, zip);
    clearForm();
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
    let phone = $('#tel').val().replace(/[^0-9]/gi, '');
    let birthday = $('#birthday').val();
    let zip = $('#zip-code').val();
    validateZip(name, email, phone, birthday, zip);
  })
};

$(function() {
  console.log('Form Ready');
  watchForm();
});