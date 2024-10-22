const inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    input.addEventListener('input', function () {
        input.classList.remove("success");
        input.classList.remove("fail");
    });
});

const resetButton = document.querySelector('input[type="reset"]');
resetButton.addEventListener('click', function () {
    inputs.forEach(function (input) {
        input.classList.remove("success");
        input.classList.remove("fail");
    });
});

function Formdata(data) {
    // ПІБ
    const elem = document.getElementById("PIB")
    if (data.PIB != null && data.PIB.value.length < 3) {
        alert('Заповніть поле "Ваше ім’я"');
        elem.classList.add("fail")
        return false;
    }
    if (/\d/.test(data.PIB.value)) {
        alert('Поле "Ваше ім’я" не повинно містити цифри');
        elem.classList.add("fail");
        return false;
    }
    else {
        elem.classList.add("success")
    }

    /* контактний телефон */
    const elem1 = document.getElementById("phone")
    if (data.phone != null && data.phone.value.length == 0) {
        alert('поле "Контактний телефон" пусте');
        elem1.classList.add("fail")
        return false;
    }
    if (data.phone != null && data.phone.value.length < 10) {
        alert('поле "Контактний телефон" повинно містити мінімум 10 символів');
        elem1.classList.add("fail")
        return false;
    }
    if (!(/^[0-9-+()s]/.test(data.phone.value))) {
        alert('"Контактний телефон" вказано невірно');
        elem1.classList.add("fail")
        return false;
    }
    else {
        elem1.classList.add("success")
    }

    /* ID паспорта */
    const elem2 = document.getElementById("IDpass")
    if (data.IDpass != null && data.IDpass.value.length == 0) {
        alert('поле "ID паспорта" пусте');
        elem2.classList.add("fail")
        return false;
    }

    if (data.IDpass != null && data.IDpass.value.length !== 9) {
        alert('поле "ID паспорта" повинно містити рівно 9 цифр');
        elem2.classList.add("fail")
        return false;
    }

    if (!(/^[0-9]{9}$/.test(data.IDpass.value))) {
        alert('"ID паспорта" вказано невірно');
        elem2.classList.add("fail")
        return false;
    }
    else {
        elem2.classList.add("success")
    }

    /* Дата народження */
    const elem3 = document.getElementById("DataB")
    if (data.DataB == null || data.DataB.value === "") {
        alert('Заповніть поле "День народження"');
        elem3.classList.add("fail")
        return false;
    }
    else {
        elem3.classList.add("success")
    }
    // E-mail
    const elem4 = document.getElementById("EMail")
    if (data.EMail != null && data.EMail.value.length == 0) {
        alert('Заповніть поле "Email"');
        elem4.classList.add("fail")
        return false;
    }
    else {
        elem4.classList.add("success")
    }
}
