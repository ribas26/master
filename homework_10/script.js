'use strict'
const regButton = document.querySelector('.autorization__button');

const email = {
    labelEmail: document.querySelector('#labelEmail'),
    inputEmail: document.querySelector('#email'),
    starEmail: document.querySelector('#starEmail'),
    labelWarnEmail: document.querySelector('#labelWarnEmail'),
    labelValidEmail: document.querySelector('#labelValidEmail')
}

const pass = {
    labelPass: document.querySelector('#labelPass'),
    inputPass: document.querySelector('#password'),
    starPass: document.querySelector('#starPass'),
    labelWarnPass: document.querySelector('#labelWarnPass'),
    labelValidPass: document.querySelector('#labelValidPass')
}

const checkbox = {
    labelCheckbox: document.querySelector('#labelCheckbox'),
    inputCheckbox: document.querySelector('#confirm-checkbox'),
    fakeCheckbox: document.querySelector('#checkbox-mark'),
    starCheckbox: document.querySelector('#starCheckbox'),
    labelWarnCheckbox: document.querySelector('#labelWarnCheckbox')
}

regButton.addEventListener('click', (event) => {
    const validEmail = validateEmail(email.inputEmail.value);
    let check = 0;

    if (email.inputEmail.value == '') {
        warningOn(email, email.inputEmail.id);
        displayOn(email, email.inputEmail.id);
        check = 1;
    } else if (!validEmail) {
        validOn(email, email.inputEmail.id);
        check = 1;
    }
    if (pass.inputPass.value == '') {
        warningOn(pass, pass.inputPass.id);
        displayOn(pass, pass.inputPass.id);
        check = 1;
    } else if (pass.inputPass.value.length < 8) {
        validOn(pass, pass.inputPass.id);
        check = 1;
    }
    if (checkbox.inputCheckbox.checked == false) {
        warningOn(checkbox, checkbox.inputCheckbox.id);
        displayOn(checkbox, checkbox.inputCheckbox.id);
        check = 1;
    }

    if (check === 0) {
        const done = {
            email: email.inputEmail.value,
            password: pass.inputPass.value
        }
        warningOff(checkbox, checkbox.inputCheckbox.id);
        displayOff(checkbox, checkbox.inputCheckbox.id);
        console.log(done);
    }

})

email.inputEmail.addEventListener('input', (event) => {
    warningOff(email, email.inputEmail.id);
    displayOff(email, email.inputEmail.id);
    validOff(email, email.inputEmail.id);
    warningOff(checkbox, checkbox.inputCheckbox.id);
    displayOff(checkbox, checkbox.inputCheckbox.id);
} )

pass.inputPass.addEventListener('input', (event) => {
    warningOff(pass, pass.inputPass.id);
    displayOff(pass, pass.inputPass.id);
    validOff(pass, pass.inputPass.id);
        warningOff(checkbox, checkbox.inputCheckbox.id);
        displayOff(checkbox, checkbox.inputCheckbox.id);
} )

function warningOn(element, id) {
    if (id == 'email') {
        element.labelEmail.classList.add('autorization__color_red');
        element.starEmail.classList.add('autorization__color_red');
        element.inputEmail.classList.add('autorization__border-color_red');
    }
    if (id == 'password') {
        element.labelPass.classList.add('autorization__color_red');
        element.starPass.classList.add('autorization__color_red');
        element.inputPass.classList.add('autorization__border-color_red');
    }
    if (id == 'confirm-checkbox') {
        element.starCheckbox.classList.add('autorization__color_red');
        // если добавить класс, то граница не окрашивается, а окрашивается дочерний элемент, сама галочка
        element.fakeCheckbox.style = 'border-color: #CB2424';
    }
}

function warningOff(element, id) {
    if (id == 'email') {
        element.labelEmail.classList.remove('autorization__color_red');
        element.starEmail.classList.remove('autorization__color_red');
        element.inputEmail.classList.remove('autorization__border-color_red');
    }
    if (id == 'password') {
        element.labelPass.classList.remove('autorization__color_red');
        element.starPass.classList.remove('autorization__color_red');
        element.inputPass.classList.remove('autorization__border-color_red');
    }
    if (id == 'confirm-checkbox') {
        element.starCheckbox.classList.remove('autorization__color_red');
        // если добавить класс, то граница не окрашивается, а окрашивается дочерний элемент, сама галочка
        element.fakeCheckbox.style = 'border-color: grey';
    }
}

function displayOn(element, id) {
    if (id == 'email') {
        element.labelWarnEmail.style = 'display: block';
    }
    if (id == 'password') {
        element.labelWarnPass.style = 'display: block';
    }
    if (id == 'confirm-checkbox') {
        element.labelWarnCheckbox.style = 'display: block';
    }
}

function displayOff(element, id) {
    if (id == 'email') {
        element.labelWarnEmail.style = 'display: none';
    }
    if (id == 'password') {
        element.labelWarnPass.style = 'display: none';
    }
    if (id == 'confirm-checkbox') {
        element.labelWarnCheckbox.style = 'display: none';
    }
}

function validOn(element, id) {
    if (id == 'email') {
        element.labelValidEmail.style = 'display: block';
    }
    if (id == 'password') {
        element.labelValidPass.style = 'display: block';
    }
}

function validOff(element, id) {
    if (id == 'email') {
        element.labelValidEmail.style = 'display: none';
    }
    if (id == 'password') {
        element.labelValidPass.style = 'display: none';
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
