import throttle from 'lodash/throttle';

const formRef = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const onFormSubmit = e => {
  e.preventDefault();
  if (formData) {
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
  }
  e.currentTarget.reset();
};

const onFormInput = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const formOutput = () => {
  const getData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    formRef.email.value = getData.email;
    formRef.message.value = getData.message;
  }
};

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));
formOutput();
