
let playerWins = 0,computerWins = 0,ties = 0










const resultAnnouncement = document.querySelector('.result')

const playerWinsTracker = document.querySelector('.player-wins')
playerWinsTracker.textContent = `Player: ${playerWins}`

const computerWinsTracker = document.querySelector('.computer-wins')
computerWinsTracker.textContent = `Computer: ${computerWins}`


function updateShownWins(){
    playerWinsTracker.textContent = `Player: ${playerWins}`
    computerWinsTracker.textContent = `Computer: ${computerWins}`
}


const choices = ["rock", "paper", "scissors"]

        function getComputerChoice(){
            let computerChoice = choices[Math.floor(Math.random()*choices.length)]
            
            return computerChoice

        }

        function playRound(playerChoice, computerChoice){

            

            const outcomes = {
                rock: {paper: "lose", scissors: "win"},
                paper: {rock: "win", scissors: "lose"},
                scissors: {rock: "lose", paper: "win"}
            }

            setComputerChoiceImage(computerChoice);

            if(playerChoice == computerChoice){
                
                resultAnnouncement.textContent = "The result is a TIE"
                ties++
                return 0
            } else{
                resultAnnouncement.textContent = `Player ${outcomes[playerChoice][computerChoice]} against computer `;
                if(outcomes[playerChoice][computerChoice] == "win") playerWins++
                else if(outcomes[playerChoice][computerChoice] == "lose") computerWins++
                else resultAnnouncement.textContent = "an error occured when deciding winner"
            }

            updateShownWins()

            if (playerWins === 5) {

                openModal('Player');
    
                playerWins = 0;
                computerWins = 0;
                ties = 0
                
            } else if (computerWins === 5) {

                openModal('Computer');
                
                playerWins = 0;
                computerWins = 0;
                ties = 0
            } 
        }

        function getPlayerChoice(){
            let choice 
            while(choice==null){

                check = prompt("choose 'rock' 'paper' or 'scissors':")
                if(check.toLowerCase() === "rock" || check.toLowerCase() === "paper" || check.toLowerCase() === "scissors"){
                    choice = check.toLowerCase()
                    console.log(`Player choice is ${choice}`)
                } else console.log("ERROR: please check spelling")
                

            }
            
            return choice
        }

        




        const playerChoiceImage = document.querySelector('.player-choice img')
        const computerChoiceImage = document.querySelector('.computer-choice img')


        function setComputerChoiceImage(computerChoice) {
            
            switch(computerChoice){
                case "rock":
                    computerChoiceImage.setAttribute('src', './images/rock.jpg')
                    break;
                case "paper":
                    computerChoiceImage.setAttribute('src', './images/paper.jpg')
                    break;
                case "scissors":
                    computerChoiceImage.setAttribute('src', './images/scissors.jpg')
            }



        }
        

        const rock = document.querySelector('.rock')
        rock.addEventListener('click', ()=>{
            if (modal.style.display !== 'block') {
                playerChoiceImage.setAttribute('src', './images/rock.jpg');
                playRound('rock', getComputerChoice());
            } else {
                openModal();
            }
        
            
        })

        const paper = document.querySelector('.paper')
        paper.addEventListener('click', ()=>{
            if (modal.style.display !== 'block') {
                playerChoiceImage.setAttribute('src', './images/paper.jpg');
                playRound('paper', getComputerChoice());
            } else {
                openModal();
            }
        
        })

        const scissors = document.querySelector('.scissors')
        scissors.addEventListener('click', ()=>{
            if (modal.style.display !== 'block') {
                playerChoiceImage.setAttribute('src', './images/scissors.jpg');
                playRound('scissors', getComputerChoice());
            } else {
                openModal();
            }
        
        })


let modal = document.getElementById('modal');
let backdrop = document.getElementById('backdrop');
let winnerText = document.getElementById('winner');
let restartBtn = document.getElementById('restart-btn');

function openModal(winner) {
    winnerText.textContent = winner + ' wins the game!';
    modal.style.display = 'block';
    backdrop.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

restartBtn.addEventListener('click', () => {
    updateShownWins()
    closeModal();
});






        