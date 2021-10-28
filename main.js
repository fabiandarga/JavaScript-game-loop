import Prompt from "prompt-sync";
const prompt = Prompt();

const gameState = {
    isPlaying: true,
    rounds: 1,
    mode: 'counting', // [counting, random]
    stopPlaying() {
        this.isPlaying = false;
    },
    startRandomMode() {
        this.mode = 'random';
    }
};

// check game state and show all important game data for this round
function render() {
    if (gameState.mode === 'counting') {
        const rounds = gameState.rounds;
        console.log('Current rounds: ' + rounds);
        if (rounds % 5 === 0) {
            console.log('You made it to 5!');
        }
    } else if (gameState.mode === 'random') {
        const number = Math.round(Math.random() * 100);
        console.log('Your random number: ' + number);
    }
}

// check current state and show right input (menu)
function getInput() {
    let input = null;
    if (gameState.mode === 'counting') {
        if (gameState.rounds % 5 === 0) {
            input = prompt('Start random mode? [r] random | [c] count | [q] quit: ');
        } else {
            input = prompt('Keep counting? [o] ok | [q] quit: ');
        }
    } else { // mode == 'random'
        input = prompt('new random Number? [o] ok | [q] quit: ');
    }
    return input; // return the user input String
}

// Take user input. Check current state and modify state.
function handleInput(input) {
    if (input === 'q') {
        gameState.stopPlaying();

    } else if (gameState.mode === 'counting' && gameState.rounds % 5 === 0) {
        if (input === 'r') {
            gameState.startRandomMode();
        }
    }
    // all other case: continue playing ...    
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
    gameState.rounds++;
}