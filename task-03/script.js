function WorkspaceResource1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Ресурс 1 готовий"), 1000);
  });
}

function WorkspaceResource2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Ресурс 2 готовий"), 2000);
  });
}

function WorkspaceResource3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Ресурс 3 готовий"), 3000);
  });
}

const resultContainer = document.getElementById("results");
const button = document.getElementById("start-button");

button.addEventListener("click", () => {
  button.disabled = true;
  resultContainer.textContent = "Завантаження...";

  Promise.all([
    WorkspaceResource1(),
    WorkspaceResource2(),
    WorkspaceResource3(),
  ])
    .then((results) => {
      resultContainer.innerHTML = results
        .map(result => `<p>${result}</p>`)
        .join("");
    })
    .catch((error) => {
      resultContainer.textContent = "Помилка: " + error.message;
    })
    .finally(() => {
      button.disabled = false;
    });
});