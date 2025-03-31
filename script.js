const messages = [
    "Jebin, are you sure?",
    "Really sure??",
    "Let's give it a try, just think about it!",
    "Pookie pleasee, pretty pleasee",
    "I'm serious about you!!!",
    "If you say no, I'll be really sad..",
    "I'LL JUST NEVER GIVE UP ON YOU!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
