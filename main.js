import Prompt from "prompt-sync";
const prompt = Prompt();

const gameState = {
    isPlaying: true,
    rounds: 1,
    mode: 'counting', // [counting, random]
};

function stopPlaying() {
    gameState.isPlaying = false;
}

function startRandomMode() {
    gameState.mode = 'random';
}

// check game state and show all important game data for this round
function render() {
    console.log('Du bist in Runde ' + gameState.rounds);
    
    if (gameState.mode === 'random') {

        const random = Math.floor(Math.random() * 100) + 1;
        console.log('Deine Zufallszahl: ' + random);
        
    }

    if (gameState.rounds % 5 === 0) {
        console.log('Klasse, wieder 5 Runden geschafft');
    }
}

// check current state and show right input (menu)
function getInput() {
    if (gameState.rounds % 5 === 0) {
        return prompt('Spielmodus wechseln? (r) Random Modus | (n) no | (q) quit > ');
    } else {
        return prompt('Drücke eine taste: (o) Ok | (q) quit > ');
    }
}

// Take user input. Check current state and modify state.
function handleInput(input) {
   if (gameState.mode === 'counting') {
       if (input === 'q') {
           stopPlaying();
       } else if (input === 'r') {
            startRandomMode();
       }
       // "o", "n" -> Spiel geht weiter
   } else if (gameState.mode === 'random') {
        if (input === 'q') {
            stopPlaying();
        } 
        // "o" -> Gar nichts machen
   }
}

// --- Main Game Loop
while (gameState.isPlaying) {
    // check gameState and show output (render)
    render();
    
    // calculate which input is allowed (menu)
    // show menu / input 
    const input = getInput();

    // use input to change the game state
    handleInput(input);

    // go to next round (automatic stuff and cleanup data)
    gameState.rounds += 1;
}