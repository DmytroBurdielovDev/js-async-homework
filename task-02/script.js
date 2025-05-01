function loadData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const success = Math.random() > 0.2; // 80% шанс успіху =)
          if (success) {
              resolve({
                  message: "Дані успішно завантажено! 🎉",
                  data: "Ось ваші дані: " + new Date().toLocaleTimeString()
              });
          } else {
              reject(new Error("Не вдалося завантажити дані. Спробуйте ще раз."));
          }
      }, 2000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('data-container');
  const button = document.getElementById('load-button');

  button.addEventListener('click', async () => {
      button.disabled = true;
      container.textContent = "Завантаження...";
      container.className = "loading";

      try {
          const result = await loadData();
          container.innerHTML = `<strong>${result.message}</strong><br>${result.data}`;
          container.className = "success";
      } catch (error) {
          container.innerHTML = `<strong>Помилка!</strong><br>${error.message}`;
          container.className = "error";
      } finally {
          button.disabled = false;
      }
  });
});