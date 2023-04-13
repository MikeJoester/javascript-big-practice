async function getEmployee() {
  const res = await fetch("http://localhost:3000/employees", {
    method: "GET",
    headers: {},
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.json();
  displayData(data);
}

function displayData(inputData) {
  let table = document.querySelector("#data-output");
  let displayData = "";
  for (let e of inputData) {
    displayData += `
      <tr>
        <td>${e.name}</td>
        <td>${e.email}</td>
        <td>${e.department}</td>
        <td>${e.phone}</td>
        <td>Edit Delete</td>
      </tr>
    `;
  }
  table.innerHTML = displayData;
}

function handleModal(btn, modal) {
  btn.onclick = function () {
    modal.style.display = "flex";
  };

  const span = document.getElementsByClassName("close-btn")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

getEmployee();

handleModal(
  document.getElementById("add-btn"),
  document.getElementById("add-modal")
);
