function validationInit() {

    const submitButton = document.querySelector('.form__btn');
    const emailToValidate = document.querySelector('#form__email');
    const nameToValidate = document.querySelector('#form__name')

    const errorMsg = document.createElement('div');
    
    //poprawić klase która dodaje się do errormsg
    errorMsg.classList.add('form__error-msg');

    const form = document.querySelector('.form__panel');
    

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();

        // klasa przy klikaniu, dodać do scss
        submitButton.classList.add('clicked');

        if(!emailToValidate.checkValidity()) {
            errorMsg.innerText = 'Incorrect email address';
            form.appendChild(errorMsg);
            // zrobić / dodać klase która zmienia style przy errorze
        } else if (nameToValidate.value.length < 6 ) {
            errorMsg.innerText = 'Too short of a name';
            form.appendChild(errorMsg);
        } else {
            form.removeChild(errorMsg);
        }
    });

    emailToValidate.addEventListener('input', function() {
        if (this.checkValidity() && submitButton.nextElementSibling !== null) {
            form.removeChild(errorMsg);
        }
    })

    nameToValidate.addEventListener('input', function() {
        if (nameToValidate.value.length > 6 && submitButton.nextElementSibling !== null) {
            form.removeChild(errorMsg);
        }
    })


}


document.addEventListener('DOMContentLoaded', validationInit());