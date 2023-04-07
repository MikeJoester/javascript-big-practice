const form = document.getElementById("login");
let data;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = {
    email: document.getElementById("email").value,
    password: document.getElementById("pass").value,
  };

  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    alert(`Error ${res.status}: ${res.statusText}!`);
  }

  data = await res.json();
  alert(`Hello ${data.user.name}!`);
  sessionStorage.setItem("user", JSON.stringify(data));
});
