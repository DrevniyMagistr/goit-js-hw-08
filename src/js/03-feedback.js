import throttle from 'lodash/throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
};

let formData = {
  email: '',
  message: '',
};

const onFormInput = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const onFormSubmit = e => {
  e.preventDefault();
  if (refs.email.value && refs.message.value !== '') {
    console.log(formData);
  }
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
};

const formOutput = () => {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData !== null) {
    formData = savedData;
    refs.email.value = savedData.email ? savedData.email : refs.email.value;
    refs.message.value = savedData.message ? savedData.message : refs.message.value;
  }
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
formOutput();
