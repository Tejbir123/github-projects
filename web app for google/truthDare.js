const readline = require('readline');

const truths = [
  "What is your biggest fear?",
  "Have you ever lied to your friends?",
  "What's your most embarrassing moment?",
  "Do you have a crush on anyone?",
  "What's the worst thing you've ever done?",
  "Have you ever cheated on a test?",
  "What's your guilty pleasure?",
  "Do you have any secret talents?",
  "What's the meanest thing you've said about someone?",
  "Have you ever broken a promise?",
  "What's your biggest insecurity?",
  "Have you ever stolen anything?"
];

const dares = [
  "Do 20 pushups",
  "Sing a song out loud",
  "Do your best impression of someone",
  "Dance like nobody's watching",
  "Call a friend and confess something funny",
  "Eat something spicy",
  "Do a handstand",
  "Speak in an accent for the next round",
  "Do 10 jumping jacks",
  "Tell a bad joke",
  "Pretend to be a famous celebrity",
  "Do the chicken dance"
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function playGame() {
  console.log("\n🎮 Welcome to Truth or Dare! 🎮\n");
  
  function askQuestion() {
    rl.question("Choose 'truth' or 'dare' (or 'quit' to exit): ", (choice) => {
      const input = choice.toLowerCase().trim();
      
      if (input === 'quit') {
        console.log("\n👋 Thanks for playing! Goodbye!\n");
        rl.close();
        return;
      }
      
      if (input === 'truth') {
        console.log("\n📖 Your truth: " + getRandomItem(truths) + "\n");
      } else if (input === 'dare') {
        console.log("\n⚡ Your dare: " + getRandomItem(dares) + "\n");
      } else {
        console.log("\n❌ Please enter 'truth', 'dare', or 'quit'\n");
      }
      
      askQuestion();
    });
  }
  
  askQuestion();
}

playGame();
