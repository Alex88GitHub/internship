
const baseSuccessCallback = (event) => {
  event.preventDefault();

  const url = 'https://echo.htmlacademy.ru/';
  const formData = new FormData(document.querySelector('[data-form-feedback="form"]'));

  fetch(url, {
    method: 'POST',
    body: formData,

  }).then((response) => response.text()).then((data) => {
    document.body.innerHTML = `<pre>${data}</pre>`;

  }).catch(() => {
    document.body.innerHTML = 'Ошибка: не удалось отправить форму';
  });

};

const baseSuccessCallbackModal = (event) => {
  event.preventDefault();

  const url = 'https://echo.htmlacademy.ru/';
  const formData = new FormData(document.querySelector('[data-form-feedback="modal"]'));

  fetch(url, {
    method: 'POST',
    body: formData,

  }).then((response) => response.text()).then((data) => {
    document.body.innerHTML = `<pre>${data}</pre>`;

  }).catch(() => {
    document.body.innerHTML = 'Ошибка: не удалось отправить форму';
  });

};

const baseErrorCallback = (event) => {
  event.preventDefault();
};

export const callbacks = {
  base: {
    reset: true,
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },

  modal: {
    reset: true,
    resetTimeout: 500,
    successCallback: baseSuccessCallbackModal,
    errorCallback: baseErrorCallback,
  },
};
