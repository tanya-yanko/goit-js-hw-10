import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === "fulfilled") {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then((delay) => {
        iziToast.success({
          title: "✅ Успіх",
          message: `Fulfilled promise in ${delay}ms`,
          position: "topRight",
        });
      })
      .catch((delay) => {
        iziToast.error({
          title: "❌ Помилка",
          message: `Rejected promise in ${delay}ms`,
          position: "topRight",
        });
      });
  });
});
