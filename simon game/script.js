let x = Math.floor((Math.random() * 4)+1 );
let arr = [];
let userarr = [];
let j =0;
let s=0;
let a=1;
let i =0;
let level = 0;
let score=0;
let started=0;
function generate(){
    let num = Math.floor((Math.random() * 4)+1 );
    if(num === 1){
        arr.push("green");
    }
    else if(num === 2){
        arr.push("red");
    }
    else if(num === 3){
        arr.push("yellow");
    }
    else{
        arr.push("blue");
    }
    $("#" + arr[j]).fadeOut(100).fadeIn(100);
    j++;
}

function check(){
    if(arr[i] === userarr[i]){
        i++;
        console.log(arr.length);
        if(arr.length === userarr.length){
            // console.log("the length is " + arr.length);
            i=0;
            return;
        }
        return;
    }
    else{
        $("#level-title").text("Game Over");
        $("#score-title").text("Your score is " + score);
        $("#score-title").css("display","block");
        playSound("wrong");
        $(".btn").remove();
    }
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

$(".btn").click(function(e){
    let t = e.target;
    userarr.push($(t).attr("id"));
    playSound($(t).attr("id"));
    check();
    if(i===0){
        level++;
        score++;
        $("#level-title").text("Level " + level);
        userarr.length = i;
        generate();

    }
});

$(document).keypress(function(){
    if(started === 0){
        generate();
        started=1;
        $("#level-title").text("Game Started");
    }
 });
