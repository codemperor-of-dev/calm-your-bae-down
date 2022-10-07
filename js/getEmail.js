const submitBtn = document.querySelector("#submitBtn");
const emailInput = document.getElementById("emailInput");

let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let emailInputVale = emailInput.value;

  ////   if it's valid
  if (pattern.test(emailInputVale)) {
    //encrypting
    let encodeBase = window.btoa(emailInputVale);

    // storing email
    localStorage.setItem("email", encodeBase);

    //  Going to redirect Link page from getEmail page
    let gettingEmail = localStorage.getItem("email");
    location.href = `../pages/redirectLink.html?email=${gettingEmail}`;

    //clearing input
    emailInput.value = "";
  }

  //// if the value is empty --
  else if (emailInputVale == "" || emailInputVale == null) {
    return;
  }

  ////  otherwise
  else {
    return;
  }
});

/// c3VteWF0YXVuZzE1ODRAZ21haWwuY29t
