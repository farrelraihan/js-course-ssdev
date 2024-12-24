

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
  } //newly replaced. converted back to JS object. also checks whether null or not

// check score null
// not needed anymore cuz simplified on above
    // if (!score){
    //   score = {
    //     wins: 0,
    //     loses: 0,
    //     ties: 0
    //   }
    // }



// get value out of local storage
// console.log(localStorage.getItem('score')); //JSON string
// console.log(JSON.parse(localStorage.getItem('score'))) // cvrt back to js object

updateScoreElement();

function resetScore(){
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  alert('score resetted!');

  updateScoreElement();

}

function playGame(userPick){
  const computerPick = pickComputerMove();
  let result = '';


  if(userPick === `Scissors`) {
    if(computerPick === 'Rock'){
        result = 'You Lose';
      } else if (computerPick === 'Paper') {
        result = 'You Win';
      } else if (computerPick === 'Scissors') {
        result = 'Tie';
      }  
  } else if (userPick === `Rock`) {
    if(computerPick === 'Rock'){
        result = 'Tie';
      } else if (computerPick === 'Paper') {
        result = 'You Lose';
      } else if (computerPick === 'Scissors') {
        result = 'You Win';
      }
  } else if (userPick === `Paper`) {
    if(computerPick === 'Rock'){
        result = 'You Win';
      } else if (computerPick === 'Paper') {
        result = 'Tie';
      } else if (computerPick === 'Scissors') {
        result = 'You Lose';
      }
  }

  // update the score to the object
  if (result === 'You Win') {
    score.wins += 1;

  } else if (result === 'You Lose') {
    score.loses += 1;
  
  } else if (result === 'Tie') {
    score.ties += 1;
  
  }


  // save it to localStorage (only strings)
  // method('name', 'value')
  // localStorage.setItem('score', 'hello');
  localStorage.setItem('score', JSON.stringify(score)); //convert it to json string



  updateScoreElement();


  // Display the result

  updateResultElement(result); 
  // // why cant this be inside a function, if i put inside a function it just wouldnt run
      // update: turnsout i need to put the parameter    
  // document.querySelector('.js-result').innerHTML = result; 
  
  updatePickElement(userPick, computerPick);
  // why cant this be inside a function, if i put inside a function it just wouldnt run
    // update: turnsout i need to put the parameter
  // document.querySelector('.js-pick').innerHTML = `You ${userPick} - ${computerPick} Computer`
}


function updateScoreElement (){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`
}


function updateResultElement(result){
  document.querySelector('.js-result').innerHTML = result; 
}

function updatePickElement (userPick, ComputerPick){
  document.querySelector('.js-pick').innerHTML = `You <img class="move-icon" src="${userPick}-emoji.png" alt=""> <img class="move-icon" src="${computerPick}-emoji.png" alt=""> Computer`
}



function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 &&  randomNumber < 1 / 3) {
    computerPick = 'Rock';
  
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerPick = 'Paper';

  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerPick = 'Scissors';

  }

  return computerPick; // can also return calc, variable, or anything that have value. will return whenever function called. will not run anything after return.
}
