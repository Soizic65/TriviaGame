$(document).ready(function(){
    var number = 90;
    $("#start").on("click", start);  
    

    function start(){
        counter = setTimeout(timer, 1000);
        $("#gamePlay").show();
        $("#startgame").hide();
        console.log(number);
    }       

    function timer(){
        number--
        $("#timer").html(number);
        if (number === 0)
        stop();
    }

});