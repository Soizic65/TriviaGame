$(document).ready(function(){
    var number = 30;
    var incorrect = 0;
    var correct = 0;
    var unanswered = 0;

    var questions = [
        "questionOne",
        "questionTwo",
        "questionThree",
        "questionFour",
        "questionFive"
    ]

    $("#start").on("click", start);  
    $("#submit").on("click", submit);
    $("#restart").on("click", restart);
    

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
        check();
    }
    function submit(){
        $("#gamePlay").hide();
        $("#results").show();
        check();
    }
    function restart(){
        $("#gamePlay").show();
        $("#results").hide();
        number = 30;
        correct = 0;
        incorrect = 0;
        unanswered - 0;
        $("button").checked = false;
    }
    
    function check(){
        for (var i=0; i < questions.length; i++){
            var current = questions[i];
            var list = document.getElementsByName(current);
                for (var y=0; y < list.length; y++){
                    if(list[y].checked){
                        value = list[y].value;
                            if(value === "r"){
                                correct++;
                            }
                            else {
                                incorrect++;
                            }
                        }
                }
        }
        unanswered = 5 - correct - incorrect
        $("#correct").html("Correct: " + correct)
        $("#incorrect").html("Incorrect: " + incorrect)
        $("#unanswered").html("Unanswered: " + unanswered)

    }
});
