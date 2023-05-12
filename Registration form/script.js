const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const pinInput = document.querySelector('#pin');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // saveData();
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const pin  = pinInput.value.trim();


//   console.log(name);
//   console.log(name.length);
//   if (name === '') {
//     alert('Please enter your name.');
//     nameInput.focus();
//   } else
    if (name.length <= 2) {
        alert('Please enter your full name.');
        nameInput.focus();
    } else if (email === '') {
        alert('Please enter your email.');
        emailInput.focus();
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
    } else if(pin.length != 6 ){
        alert('Number of digits should be 6');
        pinInput.focus();
    }else {
        // form is valid, submit it
        form.submit();

        alert('form is submitted');
    }
});

function isValidEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}