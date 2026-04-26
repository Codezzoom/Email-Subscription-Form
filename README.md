# 📧 Email Subscription Form

A modern **Email Subscription UI** built using **HTML, CSS, and JavaScript** with backend integration using **Google Apps Script**.

This project allows users to submit their email and receive real-time validation feedback along with success/error messages.

---

## 📸 Preview

![Subscription Preview](assets/images/preview.png)

---

## 🚀 Features

- 📧 Email input with validation
- ❌ Error message for invalid email
- ✅ Success message on submission
- ☁️ Google Sheets integration via Apps Script
- 🎯 Clean “Coming Soon” landing UI
- 🌄 Background image with overlay effect
- ⚡ Lightweight and responsive design

---

## 📁 Project Structure

```text
email-subscription-form/
│── index.html
│── style.css
│── script.js
│── assets/
│   └── images/
│       ├── background.png
│       ├── send-icon.png
│       └── preview.png
```

## 🛠 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **Google Apps Script (Backend)**
- **Google Fonts (Poppins)**
- **Font Awesome**

---

## ⚙️ How It Works

### 1. Email Validation

```js
const validateEmail = (email) => {
  if (!email.trim()) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
```

- Checks if email is empty
- Uses regex to validate format

---

### 2. Form Submission

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateEmail(email.value)) {
    fetch(scriptURL, {
      method: "POST",
      body: new FormData(document.forms["subscription_form"]),
    });

    displayMessage("Thank you for subscribing.", "success", 3000);
    email.value = "";
  } else {
    displayMessage("Invalid email", "error", 3000);
  }
});
```

- Prevents default form reload
- Sends data to **Google Apps Script**
- Displays success/error message

---

### 3. Google Apps Script Integration

```js
const scriptURL = "YOUR_GOOGLE_SCRIPT_URL";
```

- Sends form data to Google Sheets
- Acts as a simple backend

---

### 4. Message Display System

```js
const displayMessage = (message, classMessage, timer) => {
  messageText.innerText = message;
  messageText.classList.add(classMessage);

  setTimeout(() => {
    messageText.style.display = "none";
  }, timer);
};
```

- Shows feedback message
- Auto hides after a few seconds

---

## 🎨 UI Highlights

### Background Section

- Full-screen background image
- Dark overlay for better readability

---

### Content Section

- “Coming Soon” heading
- Clean typography using **Poppins**

---

### Email Input

- Minimal input field
- Inline submit button with icon

---

### Feedback Messages

- 🔴 Error → red text
- 🟢 Success → green text

---

## ▶️ How to Run

1. Download or clone the project

2. Place images inside:

   ```
   assets/images/
   ```

3. Open `index.html` in your browser

4. (Optional) Replace the script URL:

   ```js
   const scriptURL = "YOUR_GOOGLE_SCRIPT_URL";
   ```

5. Enter email and submit

---

## 📌 Notes

- Uses **fetch API** for sending data
- Works without any frontend framework
- Backend powered by **Google Sheets**

---

## 🔮 Future Improvements

- Add loading spinner on submit
- Prevent duplicate email entries
- Add animations for feedback
- Improve mobile responsiveness
- Add confirmation email system

---

## 📄 License

Free to use for learning and personal projects.

---

## 🙌 Author

**Github:** [https://www.github.com/codezzoom](https://www.github.com/codezzoom)

---
