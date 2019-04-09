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
    
    let askIt = {
        "question" : "What taste receptors do cats lack?",
        "answer" : ["sweet"],
        "notOne" : ["bitter", "sour", "umame"],
    }

    function questionMaker(){
        const options = askIt.answer.concat(askIt.notOne);
        const $options = $('<ul>');
        console.log(options);
        while( options.length ) {
            let answer = options.splice(Math.floor(Math.random() * options.length),1);
            $options.append('<li><input type="radio" class = "guesses" name = "guess" value="' + answer + '" >' + answer + '</li>');
        }
        console.log($options);
        return $options;
    };
     

    function triviaQuestion(){
        $('#triviaQuestion input:radio').checked = false;
        $('input[type = radio]').attr('disabled', false);
        $('#whatQuestion').html('<h1> Question '+i+' </h1>');
        $('#triviaQuestion').html(askIt.question);
        $('#triviaQuestion').append(
            questionMaker()
        );
        i++;
        $('#triviaQuestion input:radio').click(function(){
            $('input[type = radio]').attr('disabled', true);
            var radioValue=$("input[name='guess']:checked").val();
            checkAnswer(radioValue);
        });
    }
    function checkAnswer(chosen){
        $()
        if (chosen === askIt.answer[0]){
            score += 100;
            $('#score').text('Right! Your score is now ' + score + '!');
            timeLeft += 30;
            $('#triviaQuestion').html('<h2>Right!</h2>');
            setTimeout(triviaQuestion, 1000);
        }
        else{
            $('#triviaQuestion').html('<h2> Wrong! The answer was: '+ askIt.answer);
            pauseTimer();
        }
    }
    function unclick(clicked){
        clicked.checked = false;
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