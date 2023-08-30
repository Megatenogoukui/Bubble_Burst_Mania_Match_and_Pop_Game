var score = 0;
var time = 6;
var hitNo ;
var totalBubbles;
function bubbleMaking(){

        const panelBottom = document.getElementById("panel-bottom");
        const bubbleSize = 50; // Size of each bubble (adjust as needed)
        const availableWidth = panelBottom.offsetWidth;
        const availableHeight = panelBottom.offsetHeight;
        
        const maxBubblesPerRow = Math.floor(availableWidth / bubbleSize);
        const maxBubblesPerColumn = Math.floor(availableHeight / bubbleSize);
        
        totalBubbles = maxBubblesPerRow * maxBubblesPerColumn;
        console.log(totalBubbles)

    var clutter = "";
    for(var i = 0 ; i < totalBubbles ; i++){
        const randomNo = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${randomNo}</div>`;
    }
    document.querySelector("#panel-bottom").innerHTML = clutter;
}

function timer(){
    setInterval(() =>{
        if (time > 0) {
            time -= 1;
            document.querySelector("#time").innerHTML = time ;
        }
        else{
            document.querySelector("#panel-bottom").innerHTML = `<h1>GAME OVER</h1>
            <h2> YOUR SCORE  : ${score}</h2>`
            clearInterval();
        }
    },1000);
}

function hitNumber(){
    hitNo = Math.floor(Math.random() * 10);
    document.querySelector("#hit").innerHTML = hitNo;
}


function Score(){
    score += 10;
    document.querySelector("#score").innerHTML = score;
}

function checkHitNo(){
    document.querySelector("#panel-bottom").addEventListener("click" , (dets) => {
        var checkNo = Number(dets.target.textContent);
        if (checkNo === hitNo) {
            Score();
            hitNumber();
            bubbleMaking();
        }

    })
}


bubbleMaking();
timer();
hitNumber();
checkHitNo()