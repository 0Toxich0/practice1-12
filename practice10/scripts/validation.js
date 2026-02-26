document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors();

        let isValid = true;

        const name = document.getElementById('name');
        const nameValue = name.value.trim();
        if (nameValue === '') {
            showError(name, 'Введите имя');
            isValid = false;
        }

        const email = document.getElementById('email');
        const emailValue = email.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailValue === '') {
            showError(email, 'Введите email');
            isValid = false;
        } else if (!emailPattern.test(emailValue)) {
            showError(email, 'Введите корректный email');
            isValid = false;
        }

        const topic = document.getElementById('topic');
        const topicValue = topic.value;
        if (!topicValue || topicValue === '') {
            showError(topic, 'Выберите тему сообщения');
            isValid = false;
        }

        const message = document.getElementById('message');
        const messageValue = message.value.trim();
        if (messageValue === '') {
            showError(message, 'Введите сообщение');
            isValid = false;
        }

        const agreement = document.getElementById('agreement');
        if (!agreement.checked) {
            showError(agreement, 'Необходимо согласие на обработку данных');
            isValid = false;
        }

        if (isValid) {
            const formData = {
                name: nameValue,
                email: emailValue,
                topic: topicValue,
                message: messageValue
            };
            const customEvent = new CustomEvent('formValid', { detail: formData });
            document.dispatchEvent(customEvent);
            alert('Форма отправлена! Данные в консоли.');
            form.reset();
        }
    });

    function showError(input, message) {
        input.classList.add('is-danger');
        const help = document.createElement('p');
        help.classList.add('help', 'is-danger');
        help.textContent = message;
        const field = input.closest('.field');
        if (field) {
            field.appendChild(help);
        } else {
            input.parentNode.appendChild(help);
        }
    }

    function clearErrors() {
        document.querySelectorAll('.is-danger').forEach(el => {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
                el.classList.remove('is-danger');
            }
        });
        document.querySelectorAll('.help.is-danger').forEach(el => el.remove());
    }

    document.querySelectorAll('#feedbackForm input, #feedbackForm textarea, #feedbackForm select').forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('is-danger');
            const field = this.closest('.field');
            if (field) {
                const errors = field.querySelectorAll('.help.is-danger');
                errors.forEach(err => err.remove());
            }
        });
    });
    const agreement = document.getElementById('agreement');
    if (agreement) {
        agreement.addEventListener('change', function() {
            this.classList.remove('is-danger');
            const field = this.closest('.field');
            if (field) {
                const errors = field.querySelectorAll('.help.is-danger');
                errors.forEach(err => err.remove());
            }
        });
    }
});