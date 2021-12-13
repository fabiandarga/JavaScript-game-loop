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
    
}

// check current state and show right input (menu)
function getInput() {

}

// Take user input. Check current state and modify state.
function handleInput(input) {
   
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