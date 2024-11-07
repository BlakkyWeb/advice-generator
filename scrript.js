const clicker = document.querySelector(".clicker");
const number = document.querySelector('.number');
const quote = document.querySelector(".quote");


clicker.addEventListener('click', generate);


async function generate() {
    const res = await
    fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    number.innerHTML = `ADVICE # ${data.slip.id}`;
    quote.innerHTML = `${data.slip.advice}`;
}
