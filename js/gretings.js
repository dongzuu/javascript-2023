const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";
const splash = document.getElementById("splash");
const loginFormDiv = document.querySelector(".login-form-container");

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  splash.classList.add("splash-hidden");
  loginFormDiv.classList.remove("login-form-container");
  loginFormDiv.classList.add(HIDDEN_CLASSNAME);
}
function handleLinkClick() {
  alert("clicked");
}
function paintGreetings(savedUserName) {
  greeting.innerText = `HELLO  ${savedUserName} `;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

link.addEventListener("click", handleLinkClick);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUserName);
  loginFormDiv.classList.remove("login-form-container");
  loginFormDiv.classList.add(HIDDEN_CLASSNAME);
}
