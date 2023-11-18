// Получение ссылок на элементы страницы
let loginText = document.querySelector(".title-text .login");
let loginForm = document.querySelector("form.login");
let loginBtn = document.querySelector("label.login");
let signupBtn = document.querySelector("label.signup");
let signupLink = document.querySelector("form .signup-link a");
// Обработчик события для кнопки "Sign Up"
signupBtn.onclick = (()=>{
   // Сдвиг формы влево и текста заголовка влево при нажатии на кнопку "Sign Up"
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
// Обработчик события для кнопки "Login"
loginBtn.onclick = (()=>{
  // Сдвиг формы вправо и текста заголовка вправо при нажатии на кнопку "Login"
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
// Обработчик события для ссылки "Sign Up" внутри формы
signupLink.onclick = (()=>{
   // Имитация нажатия на кнопку "Sign Up" и предотвращение перехода по ссылке
  signupBtn.click();
  return false;
});