// regex ghelu
let regexInputghel = document.querySelector("#regexInputghel");
let validationTextghel = document.querySelector("#validation-text-ghel");

const REGULAR_EXPRESSION_1 = /^Ghalbi Daffa Yustiawan$/;

regexInputghel.addEventListener("input", function() {
    validationTextghel.textContent = REGULAR_EXPRESSION_1.test(regexInputghel.value) 
    ? "Valid" : "Nama yang anda masukkan salah (setiap awalan dan spasi meggunakan huruf kapital)";
});

// regex dua
let regexInputghel2 = document.querySelector("#regexInputghel2");
let validationTextghel2 = document.querySelector("#validation-text-ghel2");

const REGULAR_EXPRESSION_2 =  /^4$/;

regexInputghel2.addEventListener("input", function() {
    validationTextghel2.textContent = REGULAR_EXPRESSION_2.test(regexInputghel2.value) 
    ? "Valid" : "Masukkan tugas yang benar";
});

// regex empat
let regexInputghel3 = document.querySelector("#regexInputghel3");
let validationTextghel3 = document.querySelector("#validation-text-ghel3");

const REGULAR_EXPRESSION_3 =  /^[^\s@]+@gmail\.com$/;

;

regexInputghel3.addEventListener("input", function() {
    validationTextghel3.textContent = REGULAR_EXPRESSION_3.test(regexInputghel3.value) 
    ? "Valid" : "Masukkan email yang benar";
});

// regex tiga
let regexInputghel4 = document.querySelector("#regexInputghel4");
let validationTextghel4 = document.querySelector("#validation-text-ghel4");

const REGULAR_EXPRESSION_4 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


regexInputghel4.addEventListener("input", function() {
    validationTextghel4.textContent = REGULAR_EXPRESSION_4.test(regexInputghel4.value) 
    ? "Valid" : "masukkan minimal 8 karakter dengan setidaknya satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus(@$!%*?&).";
});



// regex lima
let regexInputghel5 = document.querySelector("#regexInputghel5");
let validationTextghel5 = document.querySelector("#validation-text-ghel5");

const REGULAR_EXPRESSION_5 = /^221402\d{3}$/;


regexInputghel5.addEventListener("input", function() {
    validationTextghel5.textContent = REGULAR_EXPRESSION_5.test(regexInputghel5.value) 
    ? "Valid" : "Masukkan NIM yang benar (Angkatan 22)";
});
