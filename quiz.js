var marks = 0;

function correct1(){
     marks = marks + 1;
    document.getElementById("person_ans_1").innerHTML= "That's Right 👍";
}

function correct2(){
     marks = marks + 1;
    document.getElementById("person_ans_2").innerHTML= "That's Right 👍";
}

function correct3(){
     marks = marks + 1;
    document.getElementById("person_ans_3").innerHTML= "That's Right 👍";
}

function correct4(){
     marks = marks + 1;
    document.getElementById("person_ans_4").innerHTML= "That's Right 👍";
}

function correct5(){
     marks = marks + 1;
    document.getElementById("person_ans_5").innerHTML= "That's Right 👍";
}

function correct6(){
     marks = marks + 1;
    document.getElementById("person_ans_6").innerHTML= "That's Right 👍";
}

function correct7(){
     marks = marks + 1;
    document.getElementById("person_ans_7").innerHTML= "That's Right 👍";
}

function correct8(){
     marks = marks + 1;
    document.getElementById("person_ans_8").innerHTML= "That's Right 👍";

    document.getElementById("final_score").innerHTML= "Your Final Score is "+marks+"/8";

    if(marks == 1){
        document.getElementById("ack").innerHTML="Could Do Better 😉";
    }

    if(marks == 2){
        document.getElementById("ack").innerHTML="Could Do Better 😉";
    }

    if(marks == 3){
        document.getElementById("ack").innerHTML="Could Do Better 😉";
    }

    if(marks == 4){
        document.getElementById("ack").innerHTML="Could Do Better 😉";
    }

    if(marks == 5){
        document.getElementById("ack").innerHTML="Good 😊";
    }

    if(marks == 6){
        document.getElementById("ack").innerHTML="Good 😊";
    }

    if(marks == 7){
        document.getElementById("ack").innerHTML="Excellent 😃😃😎😎";
    }

    if(marks == 8){
        document.getElementById("ack").innerHTML="Excellent 😃😃😎😎";
    }
}

function wrong1(){
    document.getElementById("wrong1").innerHTML= "Incorrect 👎";

    document.getElementById("ans_1").innerHTML="Correct answer : Cape Comorin";
}

function wrong2(){
    document.getElementById("wrong2").innerHTML= "Incorrect 👎";

    document.getElementById("ans_2").innerHTML="Correct answer : Nagaland";
}

function wrong3(){
    document.getElementById("wrong3").innerHTML= "Incorrect 👎";

    document.getElementById("ans_3").innerHTML="Correct answer : West Bengal";
}

function wrong4(){
    document.getElementById("wrong4").innerHTML= "Incorrect 👎";

    document.getElementById("ans_4").innerHTML="Correct answer : 38";
}

function wrong5(){
    document.getElementById("wrong5").innerHTML= "Incorrect 👎";

    document.getElementById("ans_5").innerHTML="Correct answer : Chennai";
}

function wrong6(){
    document.getElementById("wrong6").innerHTML= "Incorrect 👎";

    document.getElementById("ans_6").innerHTML="Correct answer : Kuchipudi";
}

function wrong7(){
    document.getElementById("wrong7").innerHTML= "Incorrect 👎";

    document.getElementById("ans_7").innerHTML="Correct answer : Para Gliding";
}

function wrong8(){
    document.getElementById("wrong8").innerHTML= "Incorrect 👎";

    document.getElementById("ans_8").innerHTML="Correct answer : Vaishnao Devi Temple";

    document.getElementById("final_score").innerHTML= "Your Final Score is "+marks+"/8";

    if(marks == 0){
        document.getElementById("ack").innerHTML="Can Do Better 😉";
    }

    if(marks == 1){
        document.getElementById("ack").innerHTML="Can Do Better 😉";
    }

    if(marks == 2){
        document.getElementById("ack").innerHTML="Can Do Better 😉";
    }

    if(marks == 3){
        document.getElementById("ack").innerHTML="Can Do Better 😉";
    }

    if(marks == 4){
        document.getElementById("ack").innerHTML="Can Do Better 😉";
    }

    if(marks == 5){
        document.getElementById("ack").innerHTML="Good 😊";
    }

    if(marks == 6){
        document.getElementById("ack").innerHTML="Good 😊";
    }

    if(marks == 7){
        document.getElementById("ack").innerHTML="Excellent 😃😃😎😎";
    }

    if(marks == 8){
        document.getElementById("ack").innerHTML="Excellent 😃😃😎😎";
    }
}

function home(){
    window.location = "index.html";
}