const words = [
  "Hi there!",
  "你吃了吗!",
  "Chào!",
  "नमस्ते दोस्त!",
  "안녕 친구!",
  "Apa kabar, bro!",
  "หวัดดีจ้า!",
  "Sup bro!",
  "!היוש!",
  "Heita!",
  "Cześć!",
  "你今日點咩!",
  "Howdy Partner!"
];

const wordElement = document.getElementById("word");
let currentWordIndex = 0;

function changeWord() {
  wordElement.textContent = words[currentWordIndex];
  currentWordIndex = (currentWordIndex + 1) % words.length;
}

setInterval(changeWord, 500);
