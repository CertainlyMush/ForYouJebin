const messages = [
    "Jebin, are you sure?",
    "Really sure??",
    "Let's give it a try, just think about it!",
    "Pookie please...",
    "I'm serious about you!!!",
    "If you say no, I'll be really sad..",
    "Oke fine, I'll stop...",
    "JK, I'LL NEVER GIVE UP ON YOU!"
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

function playMusic() {
             let audio = new Audio("blue.mp3");
             audio.play()
          }
          play.addEventListener("click", playMusic);
   </script>

function handleYesClick() {
    window.location.href = "yes_page.html";
}
