function validateLoginPassword() {
  const btnLogin = document.querySelector('#btn-login');
  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const form1 = document.querySelector('.trybewarts-login');
    const login = document.querySelector('#inputEmail1');
    const password = document.querySelector('#inputPassword1');
    if (login.value !== 'tryber@teste.com' || password.value !== '123456') {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
      form1.value = '';
    }
  });
}
validateLoginPassword();

function countdown() {
  const textarea = document.querySelector('#textarea');
  const counter = document.querySelector('#counter');
  textarea.addEventListener('keyup', () => {
    const maxChar = 500;
    const charLength = textarea.value.length;
    const currentChar = maxChar - charLength;
    counter.textContent = currentChar.toString();
  });
}
countdown();

function checkAgreement() {
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', (event) => {
    const submitBtn = document.querySelector('#submit-btn');
    if (event.target.checked) {
      submitBtn.removeAttribute('disabled');
    } else {
      submitBtn.setAttribute('disable', true);
    }
  });
}
checkAgreement();

const submitForm = () => {
  const evaluationForm = document.querySelector('#evaluation-form');
  const filledForm = document.querySelector('#filled-form');

  evaluationForm.style.display = 'none';
  filledForm.style.display = 'flex';
};

const submitFullName = () => {
  const inputName = document.querySelector('#input-name');
  const inputLastName = document.querySelector('#input-lastname');
  const filledName = document.querySelector('#filled-name');

  filledName.innerHTML = `${inputName.value} ${inputLastName.value}`;
};

const submitEmail = () => {
  const inputEmail = document.querySelector('#input-email');
  const filledEmail = document.querySelector('#filled-email');
  filledEmail.innerHTML = inputEmail.value;
};

const submitHouse = () => {
  const selectHouse = document.querySelector('#house');
  const filledHouse = document.querySelector('#filled-house');
  filledHouse.innerHTML = selectHouse.value;
};

const submitTextarea = () => {
  const inputComent = document.querySelector('#textarea');
  const filledComent = document.querySelector('#filled-coment');
  filledComent.innerHTML = inputComent.value;
};

function family() {
  const selectFamily = document.querySelectorAll('input[name="family"]');
  const filledFamily = document.querySelector('#filled-family');
  for (let index = 0; index < selectFamily.length; index += 1) {
    if (selectFamily[index].checked) {
      filledFamily.innerHTML = selectFamily[index].value;
    }
  }
}

function technologiesToLearn() {
  const checkIWillLearn = document.querySelectorAll('.check-i-will-learn');
  const filledContent = document.querySelector('#filled-content');
  for (let index = 0; index < checkIWillLearn.length; index += 1) {
    if (checkIWillLearn[index].checked) {
      filledContent.innerHTML += `${checkIWillLearn[index].value}, `;
    }
  }
}

function rate() {
  const selectRate = document.querySelectorAll('input[name="rate"]');
  const filledRate = document.querySelector('#filled-rate');
  for (let index = 0; index < selectRate.length; index += 1) {
    if (selectRate[index].checked) {
      filledRate.innerHTML = selectRate[index].value;
    }
  }
}

function fillOutForms() {
  const submitButton = document.querySelector('#submit-btn');
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    submitForm();
    submitFullName();
    submitEmail();
    submitHouse();
    family();
    technologiesToLearn();
    rate();
    submitTextarea();
  });
}

fillOutForms();
