import { getUser } from "./utils/handleFetchAPI";
import STORAGE_KEYS from "./constants/storageKeys";
import EMAIL_REGEX_PATTERN from "./constants/constants";
import LocalStorage from "./utils/localStorage";
import { selectDOMId } from "./utils/querySelectorDOM";

selectDOMId("login").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = {
    email: selectDOMId("email").value,
    password: selectDOMId("pass").value,
  };
  if (validateForm(input)) {
    getUser()
      .then((res) => {
        if (isValidUser(res, input)) {
          alert("Login Success!");
        } else {
          alert("Wrong email or password!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

const validateForm = (data) => {
  function validateEmail(email) {
    if (EMAIL_REGEX_PATTERN.test(email)) {
      return true;
    } else {
      alert("Wrong email format!");
      return false;
    }
  }

  function validatePass(pass) {
    const passLen = pass.length;
    if (passLen == 0) {
      alert("User password should not be empty!");
      return false;
    }
    return true;
  }

  return validateEmail(data.email) && validatePass(data.password);
};

function isValidUser(data, input) {
  for (e of data) {
    if (e.email === input.email && e.password === input.password) {
      return true;
    }
  }
  return false;
}
