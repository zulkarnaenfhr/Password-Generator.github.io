const randomPassword = document.getElementById("randomPassword");
const passwordLenght = document.getElementById("passwordLenght");
const upperCaseOption = document.getElementById("upperCaseOption");
const lowerCaseOption = document.getElementById("lowerCaseOption");
const numberOption = document.getElementById("numberOption");
const specialCharOption = document.getElementById("specialCharOption");
const buttonRandom = document.getElementById("buttonRandom");

// inisialisasi dulu terdiri dari apa aja
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numberLetters = "0123456789";
const specialCharLetters = "!@#$%^&*()";
// end of inisialisasi dulu terdiri dari apa aja

// funtion buat mengambil random nilainya
function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getNumber() {
    return numberLetters[Math.floor(Math.random() * numberLetters.length)];
}
function getSpecialChar() {
    return specialCharLetters[Math.floor(Math.random() * specialCharLetters.length)];
}
// end of funtion buat mengambil random nilainya

function generatePassword() {
    const len = passwordLenght.value;
    if (len > 17 || len < 8) {
        alert("Masukkan jumlah antara 8 - 17");
        return false;
    } else {
        let password = "";

        if (upperCaseOption.checked) {
            password += getUpperCase();
        }

        if (lowerCaseOption.checked) {
            password += getLowerCase();
        }

        if (numberOption.checked) {
            password += getNumber();
        }

        if (specialCharOption.checked) {
            password += getSpecialChar();
        }

        for (let i = 0; i < len; i++) {
            const x = generateX();
            password += x;
        }

        randomPassword.innerText = password;
    }
}

function generateX() {
    const pickX = [];

    if (upperCaseOption.checked) {
        pickX.push(getUpperCase());
    }
    if (lowerCaseOption.checked) {
        pickX.push(getLowerCase());
    }
    if (specialCharOption.checked) {
        pickX.push(getSpecialChar());
    }
    if (numberOption.checked) {
        pickX.push(getNumber());
    }

    if (pickX.length === 0) {
        return "";
    }

    return pickX[Math.floor(Math.random() * pickX.length)];
}

buttonRandom.addEventListener("click", generatePassword);
