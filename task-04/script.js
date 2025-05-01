function WorkspaceData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Дані отримано!");
        }, 3000);
    });
}

const button = document.getElementById("load-button");
const container = document.getElementById("data-container");

button.addEventListener("click", async () => {
    button.disabled = true;
    container.textContent = "Завантаження...";

    try {
        const result = await WorkspaceData();
        container.textContent = result;
    } catch (error) {
        container.textContent = `Помилка: ${error.message}`;
        console.error("Сталася помилка:", error);
    } finally {
        button.disabled = false;
    }
});