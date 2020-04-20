const respond = document.querySelector("form");

respond.addEventListener(
  "submit",
  () => {
    console.log("form submitted");
  }
  //true
);

const email = document.querySelector("#email");

email.addEventListener(
  "focus",
  () => {
    console.log("You entered the email input!");
  }
  //true
);

const username = document.querySelector("#username");

username.addEventListener(
  "blur",
  () => {
    console.log("You left the username input!");
  }
  //true
);

email.addEventListener(
  "keyup",
  () => {
    console.log("You are typing into email input!");
  }
  //true
);
