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
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var textarea = document.getElementById("textarea").value;

  if (fullName !== "" && fullName.length >= 3) {
    if (
      (email.includes("@") && email.includes(".com")) ||
      email.includes(".COM")
    ) {
      if (textarea.length > 10) {
        alert("Massage Successfully send")
        return true;
      } else {
        $(document).ready(function () {
          $("#submit").click(function () {
            $(".contactForm div:first-child").addClass("alert-red");
        $(".contactForm div:first-child").removeClass("alert-green");
            $(".assist").html("Please Enter minimum 10 character in Massage");
          });
        });
      }
    } else {
      $(document).ready(function () {
        $("#submit").click(function () {
          $(".contactForm div:first-child").addClass("alert-red");
        $(".contactForm div:first-child").removeClass("alert-green");
          $(".assist").html(
            "Please Enter valid Email I'd (ex-: <b>alpha@gmail.com</b>)"
          );
        });
      });
    }
  } else {
    $(document).ready(function () {
      $("#submit").click(function () {
        $(".contactForm div:first-child").addClass("alert-red");
        $(".contactForm div:first-child").removeClass("alert-green");
        $(".assist").html(
          "Please Enter full Name (ex-: <b>sharad choudhary</b>)"
        );
      });
    });
  }
  return false;
}
