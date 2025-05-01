# 🌟 Асинхронний JavaScript: 5 практичних завдань

Цей репозиторій містить серію практичних завдань для освоєння асинхронного JavaScript. Кожне завдання фокусується на окремому аспекті роботи з асинхронністю.

## 📋 Зміст
1. [Послідовність викликів](#-послідовність-викликів)
2. [Обіцянка даних](#-обіцянка-даних)
3. [Гонка за ресурсами](#-гонка-за-ресурсами)
4. [Асинхронна магія](#-асинхронна-магія)
5. [Лічильник під контролем](#-лічильник-під-контролем)

---

## ⏱️🚦 Послідовність викликів
**Мета:** Зрозуміти, як `setTimeout` ставить функцію в чергу.

```javascript
console.log("Початок");
setTimeout(() => console.log("Середина"), 1000);
setTimeout(() => console.log("Кінець"), 2000);
```
**Результат:**  
`Початок` → (пауза ~1с) → `Середина` → (пауза ~1с) → `Кінець`

---

## 🤝🎁 Обіцянка даних
**Мета:** Створити та виконати `Promise`.

```javascript
function WorkspaceData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Дані отримано!"), 3000);
  });
}
```
**Інтерфейс:**  
🖱️ Клік → "Завантаження..." (кнопка неактивна) → (3 сек) → "Дані отримано!" (кнопка активна)

---

## 🚀🏁 Гонка за ресурсами
**Мета:** Запустити операції паралельно з `Promise.all`.

```javascript
Promise.all([
  WorkspaceResource1(), // 1с
  WorkspaceResource2(), // 3с 
  WorkspaceResource3()  // 2с
]).then(results => {
  /* Обробка результатів */
});
```
**Результат:**  
Всі результати з'являються одночасно після 3с (найдовшої затримки)

---

## ✨🪄 Асинхронна магія
**Мета:** Використати `async/await` замість `.then()`.

```javascript
button.addEventListener('click', async () => {
  button.disabled = true;
  const data = await WorkspaceData();
  /* ... */
});
```
**Переваги:**  
✔️ Більш читабельний код  
✔️ Лінійне виконання асинхронних операцій

---

## ⏲️💧🚫 Лічильник під контролем
**Мета:** Контроль періодичних дій з `setInterval`.

```javascript
let intervalId = null;

startBtn.addEventListener('click', () => {
  if (!intervalId) {
    intervalId = setInterval(updateTimer, 1000);
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
});
```
**Важливо:**  
❗ Завжди очищайте інтервали, щоб уникнути витоків пам'яті

---

## 🛠️ Технології
- JavaScript (ES6+)
- Promises
- Async/Await
- DOM API

## 📚 Навчальні матеріали
- [MDN: Асинхронний JavaScript](https://developer.mozilla.org/uk/docs/Learn/JavaScript/Asynchronous)
- [Event Loop візуалізація](https://www.jsv9000.app/)
- [Promise.all vs allSettled](https://exploringjs.com/es2020/es2020.html#Promise.allSettled)
