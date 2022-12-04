let alphabet = '';

for (let i = 25; i > -1; i--) {
    alphabet += String.fromCharCode(i + 65);
}

const paragraphElement = document.querySelector('p');

paragraphElement.innerText = alphabet;