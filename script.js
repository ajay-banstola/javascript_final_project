
      var ballX = 300; 
      var ballY = 300; 
      var ballDX = 2; 
      var ballDY = 4; 
      var boardX = 500;
      var boardY = 500;
      var paddleX = 300;
      
      var paddleH = 15; 
      
      var paddleD = boardY - paddleH; 
      var paddleW = 150; 
      var canvas; 
      var ctx; 
      var gameLoop; 
      var score = 0;
     


      function drawGameCanvas() {

        
        canvas = document.getElementById("gameBoard");
        
       
        if (canvas.getContext) {
        
          ctx = canvas.getContext("2d");

          gameLoop = setInterval(drawBall, 14);

          
          window.addEventListener('keydown', whatKey, true);

        }
      }

      function drawBall() {

        
        ctx.clearRect(0, 0, boardX, boardY);

        
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.rect(0, 0, boardX, boardY);
        ctx.closePath();
        ctx.fill();

        
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(ballX, ballY, 15, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.rect(paddleX, paddleD, paddleW, paddleH);
        ctx.closePath();
        ctx.fill();

       
        ballX += ballDX;
        ballY += ballDY;

        if (ballX + ballDX > boardX - 15 || ballX + ballDX < 15){
         ballDX = -ballDX;
        }
         
        if (ballY + ballDY < 15) ballDY = -ballDY;
       
        else if (ballY + ballDY > boardY - 15) {
        
          if (ballX > paddleX && ballX < paddleX + paddleW){ 
            ballDY = -ballDY;
          }
          
          else {
            clearInterval(gameLoop);
            alert("Game over!");
          }
        
        if (ballY = 300)
          score = score + 1;
          var scoreboard = parseInt(score);
          setColor(); 

        function setColor() {
          var randomNumberBetween0and4 = Math.floor(Math.random() * 5);
          var colors = ["bisque","yellow", "orange", "grey","aliceblue"];
          var x = document.body;
          x.style.backgroundColor = colors[randomNumberBetween0and4];
          
          document.getElementById("score").innerHTML = scoreboard;
        
           } 
        }
      }

   


      function whatKey(evt) {

        switch (evt.keyCode) {
         
        case 37:
          paddleX = paddleX - 20;
          if (paddleX < 0) paddleX = 0;
          break;

         
        case 39:
          paddleX = paddleX + 20;
          if (paddleX > boardX - paddleW) paddleX = boardX - paddleW;
          break;
        }
      }
    
      var myTimeVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("time").innerHTML = t;
}