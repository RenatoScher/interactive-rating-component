const feedback = document.getElementById('feedback');
const thankYou = document.getElementById('thankYou')
const buttons = document.getElementById('rating').children;
const submit = document.getElementById('submit');

let rating = undefined;

for (const btn of buttons) {
    btn.addEventListener('click', () => {
        for (const btn of buttons) {
            btn.classList.remove('selected');
        }
        btn.classList.add('selected');
        rating = Number(Array.from(buttons).indexOf(btn)) + 1;

        // document.documentElement.style.setProperty('--animation-time', (100 * rating) + 'ms');


    })
}


function finalScreen() {
    console.log(rating, typeof rating);
    if (!rating) {
        return;
    }
    // localStorage.setItem('rating', JSON.stringify(rating));
    feedback.classList.add('hide');
    feedback.addEventListener('animationend',() => {
        feedback.style.display = 'none';
        thankYou.classList.remove('hide');
        thankYou.classList.add('show');
        thankYou.style.display = 'flex';
        document.getElementById('finalRating').querySelector('p').innerText = document.getElementById('finalRating').querySelector('p').innerText.replace('?', rating)
    })
}


submit.addEventListener('click', finalScreen);
rating = JSON.parse(localStorage.getItem('rating'));
finalScreen();