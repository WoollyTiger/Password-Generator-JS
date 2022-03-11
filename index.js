// An automatic random password generator which creates
// four passwords consisting of all the available characters, 
// based on the length variable.


const charStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcefghijklmnopqrstuvwxyz!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
const charArr = charStr.split('');
let passwordLength = 15;

const bottomSection = document.querySelector('#bottom-section');




// Set default values for password fields
// password_1.value = '<h2>sds</h2>';
// password_2.value = 'Kii';
// password_3.value = 'Kii';
// password_4.value = 'Kii';


function pushPasswords() {
    
    bottomSection.innerHTML = `<input type="text" id="password-1" readonly>
    <input type="text" id="password-2" readonly>
    <input type="text" id="password-3" readonly>
    <input type="text" id="password-4" readonly>`
    
    const password_1 = document.querySelector('#password-1');
    const password_2 = document.querySelector('#password-2');
    const password_3 = document.querySelector('#password-3');
    const password_4 = document.querySelector('#password-4');
    
    password_1.value = generatePwd();
    password_2.value = generatePwd();
    password_3.value = generatePwd();
    password_4.value = generatePwd();

    // automatically copy password from field on click
    password_1.addEventListener('click', copyText);
    password_2.addEventListener('click', copyText);
    password_3.addEventListener('click', copyText);
    password_4.addEventListener('click', copyText);

};

function generatePwd() {
    let pwdArray = [];
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * charArr.length);
        pwdArray.push(charArr[randomIndex]);
    };
    return pwdArray.join('');
};

function copyText() {
    this.select();
    this.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(this.value);


};

