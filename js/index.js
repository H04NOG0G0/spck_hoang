const inputEmail = document.querySelector(".Email-Address");
const inputPassword = document.querySelector(".password-input");
const EmailBlankErr = document.querySelector(".err-email");
const passwordBlankErr = document.querySelector(".err-password");
const CreateAccount = document.querySelector(".Create-acc");

// inputEmail.addEventListener("blur", (e) =>
//   console.log(
//     "The email address or mobile number you entered isn't connected to an account. <a>Find your account and log in.</a>"
//   )
// );
const Form = document.querySelector(".formal");
const LoginBut = document.querySelector(".login-button");
LoginBut.addEventListener("click", (e) => {
  e.preventDefault();
  if (!inputEmail.value) {
    inputEmail.style.border = "1px solid red";
    EmailBlankErr.style.display = "block";
    inputPassword.style.border = "1px solid red";
    passwordBlankErr.style.display = "block";
    CreateAccount.style.margin = "5px 90px";
  } else {
    inputEmail.style.border = "1px solid #dddfe2";
    EmailBlankErr.style.display = "none";
    inputPassword.style.border = "1px solid #dddfe2";
    passwordBlankErr.style.display = "none";
    const EmailINfor = inputEmail.value;
    const PasswordINfor = inputPassword.value;
    const accountUser = JSON.parse(localStorage.getItem("account")) || [];
    const incorrect = document.querySelector(".incorrect-pass");
    accountUser.forEach((element) => {
      if (
        EmailINfor === element.userEmail &&
        PasswordINfor === element.password
      ) {
        window.location.href = "../html/index.html";
      } else {
        incorrect.style.display = "block";
      }
    });
    if (accountUser.length === 0) {
      incorrect.style.display = "block";
    }
  }
});
function showHide() {
  var x = document.getElementById("passcode");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
//signIn form
const SignInModal = document.querySelector(".modal");
const outByX = document.querySelector(".fa-xmark ");

CreateAccount.addEventListener("click", (e) => {
  SignInModal.style.visibility = "visible";
});
outByX.addEventListener("click", (e) => {
  SignInModal.style.visibility = "hidden";
  FirstNameSign.value = "";
  SurnameSign.value = ""; //đoạn này là để khi mà mở lại form thìnókhôngbịlưulại
  SignUpEmail.value = "";
  passwordSignUp.value = "";
});
const FirstNameSign = document.querySelector(".FirstName");
const SurnameSign = document.querySelector(".Surname");
const SignUpEmail = document.querySelector(".Email-AddressSign");
const passwordSignUp = document.querySelector(".password-inputSign");
const warn = document.querySelector(".warning");

const data = JSON.parse(localStorage.getItem("account")) || [];

function errCatch() {
  if (!FirstNameSign.value) {
    FirstNameSign.style.border = "1px solid red";
    SurnameSign.style.border = "1px solid red";
    SignUpEmail.style.border = "1px solid red";
    passwordSignUp.style.border = "1px solid red";
    warn.style.display = "block";
  } else {
    FirstNameSign.style.border = "1px solid #ccd0d5";
    SurnameSign.style.border = "1px solid #ccd0d5";
    SignUpEmail.style.border = "1px solid #ccd0d5";
    passwordSignUp.style.border = "1px solid #ccd0d5";
    warn.style.display = "none";
    console.log(FirstNameSign.value);
    console.log(SurnameSign.value);
    console.log(SignUpEmail.value);
    console.log(passwordSignUp.value);
    SignInModal.style.visibility = "hidden";
    setTimeout("alert('Sign Up successfully!!!')", 1000);
    const user = {
      firstName: FirstNameSign.value, // đoạn này là nội dung của user lấytừform
      surName: SurnameSign.value,
      userEmail: SignUpEmail.value,
      password: passwordSignUp.value,
    };
    data.push(user); // đoạn này là để đưa user vào trong data
    localStorage.setItem("account", JSON.stringify(data));
  }
}

const SignUpButton = document.querySelector(".signUp-button");
SignUpButton.addEventListener("click", (e) => {
  e.preventDefault();
  errCatch();
});
