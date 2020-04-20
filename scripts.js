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
