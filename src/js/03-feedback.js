import throttle from 'lodash/throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
};

const formData = {
  email: '',
  message: '',
};

const onFormSubmit = e => {
  e.preventDefault();
  if (refs.email.value && refs.message.value !== '') {
    console.log(formData);
  }
  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
};

const onFormInput = () => {
  formData.email = refs.email.value;
  formData.message = refs.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const formOutput = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const getData = JSON.parse(savedData);

  if (getData !== null) {
    refs.email.value = getData.email;
    refs.message.value = getData.message;
  }
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
formOutput();
