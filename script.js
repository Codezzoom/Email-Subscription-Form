const scriptURL = "https://script.google.com/macros/s/AKfycbxJbUfWgWx-KOqDeom7mXq6u0k_ZS8AlqsfMGXaeHEG-6GHPkfM1wsPJgJZgR81vqcp/exec";

const email = document.querySelector("#email");
const form = document.querySelector("form");
const messageText = document.querySelector(".message-text");

const validateEmail = (email) => {
  if (!email.trim()) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(email);

  if (emailRegex.test(email)) return true;
  else return false;
};

const displayMessage = (message, classMessage, timer) => {
  messageText.innerText = message;
  messageText.classList.add(classMessage);
  setTimeout(() => {
    messageText.style.display = "none";
  }, timer);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  messageText.style.display = "block";
  console.log(validateEmail(email.value));
  if (validateEmail(email.value)) {
    const form = document.forms['subscription_form'];

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => response.json())
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message));

    displayMessage("Thank you for subscribing.", "success", 3000);
    email.value = "";
  } else {
    displayMessage("Invalid email", "error", 3000);
  }
});