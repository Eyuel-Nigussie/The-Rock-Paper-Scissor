function rpsGame(yourChoice){
   
        // Developed by Eyuel Nigussie

    var humanChoice = yourChoice.id;
    var botChoice = botsChoiceFunction();
    result = decideWinner(humanChoice, botChoice); 
    console.log(result);

    var message = finalMessage(result);    
    rpsFrontEnd(yourChoice.id, botChoice, message);

}

function botsChoiceFunction(){
  var randNumber = Math.floor(Math.random()*3);
  return ['rock','paper', 'scissor'][randNumber]
 }


function decideWinner(humanChoice, botChoice){
    var rpsDatabase = {
        'rock'   :  {'scissor': 1,   'rock': 0.5, 'paper': 0},
        'paper'  :  {'scissor': 0,   'rock': 1,   'paper': 0.5},
        'scissor':  {'scissor': 0.5, 'rock': 0,   'paper': 1}
    }; 
    var yourScore = rpsDatabase[humanChoice][botChoice];
    var computerScore = rpsDatabase[botChoice][humanChoice];

    return [yourScore, computerScore];
}


function finalMessage ([yourScore, computerScore]){
    if(yourScore === 0 ){
        return {'Message': 'You Lost', 'color': 'red'}
    }
    else if(yourScore === 0.5 ){
        return {'Message': 'Draw', 'color': 'grey'}
    }
    else if(yourScore === 1){
        return {'Message': 'You Win', 'color': 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv   = document.createElement('div');
    var messageDiv =   document.createElement('div');

    humanDiv.innerHTML = " <img src='"+ imagesDatabase[humanImageChoice]  + " 'style='box-shadow: 0px 0px 20px blue; width: 80%; height: 80%'>";
    botDiv.innerHTML   = " <img src='"+ imagesDatabase[botImageChoice]    + " 'style='box-shadow: 0px 0px 20px red; width: 80%; height: 80%'  >"; 
    messageDiv.innerHTML = "<h1 style='color: "+ finalMessage['color']    + " 'style= 'font-family: cursive; width: 80%; height: 80%'>"+ finalMessage['Message']+"</h1>"

  
    document.getElementById('flex-container').appendChild(humanDiv);
    document.getElementById('flex-container').appendChild(messageDiv);
    document.getElementById('flex-container').appendChild(botDiv);

    
}   

        // Developed by Eyuel Nigussie