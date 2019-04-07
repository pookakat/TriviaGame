let timeLeft=30;
let timer;
let i=1;
$( document ).ready(function() {
    $('button').click(function(){
        $('#triviaCard').show();
        timeLeft=30;
        if ($('button').hasClass("started")){
            clearTimeout(timer);
            $('#triviaCard').hide();
            $('#triviaCard').html('');
            i = 1;
            $('button').text("Start the Game!");
            $('button').removeClass("started");  
        }
        else{
        $('button').text("Counting Down");
        $('button').addClass("started");
        triviaQuestion();
            timer = setInterval(function(){
                $('#timer').text( timeLeft + ' seconds!');
                timeLeft--;
                if ( timeLeft <= 0 ){
                    $('#timer').html("<p>Time's Up!");
                    clearTimeout(timer);
                    $('button').removeClass( "started" );
                    $('button').text("Try Again?");
                    $('#triviaCard').hide();
                    $('#triviaCard').html('');
                    i = 1;
                }
            },1000);}
    });

    function triviaQuestion(){
        $('#triviaCard').prepend('<h1> Question '+i+' </h1>');
        $('#triviaQuestion').append('<h2> How much wood can a WoodChuck Chuck? </h2>');
        $('#triviaQuestion').append('<ul><li><input type="radio" name = "guess" value="lots"> Lots</li>');
        $('#triviaQuestion').append('<ul><li><input type="radio" name = "guess" value="none"> None</li>');
        $('#triviaQuestion').append('<ul><li><input type="radio" name = "guess" value="some"> Some</li>');
        i++;
        $('#triviaQuestion input:radio').click(function(){
            $('input[type = radio]').attr('disabled', true);
            var radioValue=$("input[name='guess']:checked").val();
            console.log(radioValue);
        });

    }
    
    
    

    
    
});