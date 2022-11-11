AOS.init();

$(document).ready(function () {
  $(".toggle-button").click(function () {
    $(".navbar-list").toggleClass("active");
  });
});

const project = document.getElementById("project");
project.addEventListener("click", function () {
  alert("available soon");
});

function validate() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const textarea = document.getElementById("textarea").value;

  if (fullName !== "" || fullName.length >= 3) {
    if (email.includes("@") && email.includes(".com")) {
      if (textarea.length > 10) {
        console.log("submitted");
      } else {
        console.log("please enter massage at least 10 character");
      }
    } else {
      console.log("please enter valid Email");
    }
  } else {
    console.log("please enter Full name");
  }
  return false;
}
