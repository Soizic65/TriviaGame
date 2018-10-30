$(document).ready(function(){
    var number = 30;
    var incorrect = 0;
    var correct = 0;
    var unanswered = 0;

    $("#start").on("click", start);  
    

    function start(){
        counter = setInterval(timer, 1000);
        $("#gamePlay").show();
        $("#startgame").hide();
        
        console.log(number);
    }       

    function timer(){
        number--
        $("#timer").html(number);
        if (number === 0){
            $("#gamePlay").hide();
            $("#outoftime").show();
            setTimeout(stop, 3000);
        }
    }
    function stop(){
        $("#results").show();
        $("#outoftime").hide();
    }

});
