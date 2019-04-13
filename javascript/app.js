let timeLeft = 30;
let timer;
let timeForBonus = 0;
let i = 1;
let score = 0;
let askIt;
let currentQuestions;
let correctAnswers = 0;
let incorrectAnswers = 0;

$( document ).ready(function() {
    $('button').click(function(){
        currentQuestions = questions.slice(0);
        $('#timer').toggle();
        if ($('button').hasClass("started")){
            clearTimeout(timer);
            timeLeft = 0;
            $('#triviaCard').hide();
            $('#triviaQuestion').text('');
            i = 1;
            $('button').text("Start the Game!");
            $('button').removeClass("started"); 
            $('#score').text('Your total score: ' + score);
            score = 0; 
        }
        else{
            $('button').text("Counting Down");
            $('button').addClass("started");
            $('#otherStuff').removeClass('endGame');
            $('#otherStuff').hide();
            triviaQuestion();
            clearTimeout(timer);
            timeLeft = 30;
            correctAnswers = 0;
            incorrectAnswers = 0;
            timer = setInterval(countDown, 1000);
        }
    });
    function countDown(){
        $('#timer').text( timeLeft + ' seconds!');
        timeLeft--;
        if ( timeLeft <= -1 ){
            $('#timer').html("<p>Time's Up!");
            showTimeOut ();
            }
    }
    
    function questionMaker(askIt){
        const options = askIt.answer.concat(askIt.notOne);
        const $options = $('<ul>');
        while( options.length ) {
            let answer = options.splice(Math.floor(Math.random() * options.length),1);
            $options.append('<li><input type="radio" class = "guesses" name = "guess" value="' + answer + '" >' + answer + '</li>');
        }
        return $options;
    };
     

    function triviaQuestion(){
        $('#triviaCard').show();
        $('#otherStuff').removeClass('win');
        $('#otherStuff').removeClass('defeat');
        $('#score').text('Your score is: ' + score);
        timeLeft=30;
        if (i<21){
            askIt=getAQuestion(currentQuestions);
            $('#triviaQuestion input:radio').checked = false;
            $('input[type = radio]').attr('disabled', false);
            $('#whatQuestion').html('<h1> Question '+i+' </h1>');
            $('#triviaQuestion').html(askIt.question);
            $('#triviaQuestion').append(
                questionMaker(askIt)
            );
            i++;
            $('#triviaQuestion input:radio').click(function(){
                $('input[type = radio]').attr('disabled', true);
                var radioValue=$("input[name='guess']:checked").val();
                checkAnswer(radioValue);
            });
        }
        else{
            endGame();
        }
    }
    function checkAnswer(chosen){
        if (chosen === askIt.answer[0]){
            score += 10;
            showCelebration();
        }
        else{
            showDefeat();
        }
        pauseTimer();
    }
    function showCelebration(){
        $('#triviaCard').hide();
        $('#otherStuff').show();
        $('#otherStuff').addClass('win');
        $('#otherStuff').html('<h1>Correct! HUZZAH!!!</h1>');
        $('#otherStuff').append('<h2>' + askIt.answer + '</h2>');
        $('#otherStuff').append('<h2> Your score is now '+ score + '! </h2>');
        timeForBonus += timeLeft;
        correctAnswers++;
    }
    function showDefeat(){
        $('#triviaCard').hide();
        $('#otherStuff').show();
        $('#otherStuff').addClass('defeat');
        $('#otherStuff').html('<h1>WRONG!</h1>');
        $('#otherStuff').append('<h2> The answer is: ' + askIt.answer + '</h2>');
        $('#otherStuff').append('<h2> Shake it off! Here comes another! </h2>');
        incorrectAnswers++;
    }

    function showTimeOut(){
        $('#triviaCard').hide();
        $('#otherStuff').show();
        $('#otherStuff').addClass('defeat');
        $('#otherStuff').html('<h1>Time OUT!!</h1>');
        $('#otherStuff').append('<h2> The answer is: ' + askIt.answer + '</h2>');
        $('#otherStuff').append('<h2> Shake it off! Here comes another! </h2>');
        pauseTimer();
    }

    function endGame(){
        clearTimeout(timer);
        timer = null;
        let bonusScore=timeForBonus*3;
        let totalScore=score+bonusScore;
        $('button').text("Try Again?");
        $('button').removeClass("started"); 
        $('#timer').toggle();
        $('#triviaCard').hide();
        $('#otherStuff').show();
        $('#otherStuff').addClass('endGame');
        $('#otherStuff').html('<h1>Game Over!</h1>');
        $('#otherStuff').append('<h2> Good job! You answered <span class="green">'+ correctAnswers +'</span> correcty and <span class="red">'+ incorrectAnswers + '</span> incorrectly out of 20.');
        $('#otherStuff').append('<h2> Your time left on correct questions was ' + timeForBonus +'seconds! </h2>');
        $('#otherStuff').append('<h2> Your total score is: '+ totalScore + 'points!</h2>');
    }

    function unclick(clicked){
        clicked.checked = false;
    }

    function pauseTimer(){
        clearTimeout(timer);
        setTimeout(restart, 3000);
    }
    
    function restart(){
        $('#otherStuff').hide();
        $('#otherStuff').empty();
        triviaQuestion();
        timer = setInterval(countDown, 1000);
    }
    
    

    
    
});