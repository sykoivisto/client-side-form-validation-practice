const verify = (() => {
  const signUpForm = document.getElementById('signUpForm');

  // add touched class to inputs that have been touched.
  // used to style invalid elements that have been touched
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.classList.add('touched');
    });
  });

  const email = document.getElementById('email');
  const emailError = document.querySelector('#email + span.error');

  const country = document.getElementById('country');
  const countryError = document.querySelector('#country + span.error');

  const zip = document.getElementById('zip');
  const zipError = document.querySelector('#zip + span.error');

  const password = document.getElementById('password');
  const passwordError = document.querySelector('#password + span.error');

  const confirmPassword = document.getElementById('confirmPassword');
  const confirmPasswordError = document.querySelector('#confirmPassword + span.error');

  const confirmPasswordVerification = () => (confirmPassword.value === password.value);

  const showEmailError = () => {
    if (email.validity.valueMissing) {
      emailError.textContent = 'You need to enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
      emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if (email.validity.tooShort) {
      emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    emailError.className = 'error active';
  };

  const showCountryError = () => {
    if (country.validity.valueMissing) {
      countryError.textContent = 'You need to enter a country.';
    }
    countryError.className = 'error active';
  };

  const showZipError = () => {
    if (zip.validity.valueMissing) {
      zipError.textContent = 'You need to enter a zip.';
    }
    zipError.className = 'error active';
  };

  const showPasswordError = () => {
    if (password.validity.valueMissing) {
      passwordError.textContent = 'You need to enter a password.';
    } else if (password.validity.tooShort) {
      passwordError.textContent = 'Password must be at least 6 characters.';
    }
  };

  const showConfirmPasswordError = () => {
    if (!confirmPasswordVerification()) {
      confirmPasswordError.textContent = 'Passwords must match.';
      confirmPasswordError.className = 'error active';
    }
  };

  email.addEventListener('input', () => {
    if (email.validity.valid) {
      emailError.textContent = '';
      emailError.className = 'error';
    } else {
      showEmailError();
    }
  });

  country.addEventListener('input', () => {
    if (country.validity.valid) {
      countryError.textContent = '';
      countryError.className = 'error';
    } else {
      showCountryError();
    }
  });

  zip.addEventListener('input', () => {
    if (zip.validity.valid) {
      zipError.textContent = '';
      zipError.className = 'error';
    } else {
      showZipError();
    }
  });

  password.addEventListener('input', () => {
    if (password.validity.valid) {
      passwordError.textContent = '';
      passwordError.className = 'error';
    } else {
      showPasswordError();
    }
    if (confirmPasswordVerification()) {
      confirmPasswordError.textContent = '';
      confirmPasswordError.className = 'error';
    } else {
      showConfirmPasswordError();
    }
  });

  confirmPassword.addEventListener('input', () => {
    if (confirmPasswordVerification()) {
      confirmPasswordError.textContent = '';
      confirmPasswordError.className = 'error';
    } else {
      showConfirmPasswordError();
    }
  });

  const showError = () => {
    showEmailError();
    showCountryError();
    showZipError();
    showPasswordError();
    showConfirmPasswordError();
  };

  signUpForm.addEventListener('submit', (e) => {
    // make all inputs touched on submit.
    inputs.forEach((input) => {
      input.classList.add('touched');
    });
    if (!email.validity.valid) {
      showError();
      e.preventDefault();
    } else if (!country.validity.valid) {
      showError();
      e.preventDefault();
    } else if (!zip.validity.valid) {
      showError();
      e.preventDefault();
    } else if (!password.validity.valid) {
      showError();
      e.preventDefault();
    } else if (!confirmPasswordVerification()) {
      showError();
      e.preventDefault();
    } else {
      alert('The form has submitted!');
    }
  });
})();
