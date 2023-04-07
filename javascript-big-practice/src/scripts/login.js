const form = document.getElementById("login");
let data;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = {
    email: document.getElementById("email").value,
    password: document.getElementById("pass").value,
  };

  const res = await fetch("http://localhost:3000/users", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    alert(`Error ${res.status}: ${res.statusText}!`);
  }

  data = await res.json();
  if (validateUser(data, input)) {
    alert("Success!");
  } else {
    alert("Wrong Password!");
  }
});

function validateUser(data, input) {
  for (e of data) {
    if (e.email === input.email && e.password === input.password) {
      return true;
    }
  }
  return false;
}
