let timeLeft=30;
let timer;
let i=1;
let score = 0;
$( document ).ready(function() {
    $('button').click(function(){
        $('#triviaCard').show();
        timeLeft=30;
        if ($('button').hasClass("started")){
            clearTimeout(timer);
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
            triviaQuestion();
            timer = setInterval(countDown, 1000);
        }
    });
    function countDown(){
        $('#timer').text( timeLeft + ' seconds!');
        timeLeft--;
        if ( timeLeft <= 0 ){
            $('#timer').html("<p>Time's Up!");
            clearTimeout(timer);
            $('button').removeClass( "started" );
            $('button').text("Try Again?");
            $('#triviaCard').hide();
            $('#triviaQuestion').text('');
            i = 1;
            $('#score').text('Your total score: ' + score);
            score = 0;
        }
    }
    
    let askIt={
        "question" : "What taste receptors do cats lack?",
        "answer" : "sweet",
    }

    function triviaQuestion(){
        $('input[type = radio]').attr('disabled', false);
        $('#whatQuestion').html('<h1> Question '+i+' </h1>');
        $('#triviaQuestion').html(askIt.question);
        $('#triviaQuestion').append('<ul><li><input type="radio" name = "guess" value="answer"> Lots</li>');
        $('#triviaQuestion').append('<ul><li><input type="radio" name = "guess" value="notone"> None</li>');
        $('#triviaQuestion').append('<ul><li><input type="radio" name = "guess" value="notone"> Some</li>');
        $('#triviaQuestion').append('<ul><li><input type="radio" name = "guess" value="notone"> Gorilla</li>');
        i++;
        $('#triviaQuestion input:radio').click(function(){
            $('input[type = radio]').attr('disabled', true);
            var radioValue=$("input[name='guess']:checked").val();
            checkAnswer(radioValue);
        });
    }
    function checkAnswer(chosen){
        if (chosen === "answer"){
            score += 100;
            $('#score').text('Right! Your score is now ' + score + '!');
            $('input[type = radio]').attr('disabled', false);
            timeLeft += 30;
        }
        else{
            $('#triviaQuestion').html('<h2> Wrong! The answer was: '+ askIt.answer);
            pauseTimer();
        }
    }

    function pauseTimer(){
        clearTimeout(timer);
        setTimeout(restart, 5000);
    }
    
    function restart(){
        triviaQuestion();
        timer = setInterval(countDown, 1000);
    }
    
    

    
    
});