let alphabet = '';

for (let i = 0; i < 26; i++) {
    alphabet += String.fromCharCode(i + 65);
}

const paragraphElement = document.querySelector('p');

paragraphElement.innerText = alphabet;