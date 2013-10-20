var gameModule = (function() {
    
    var timeoutVar,
    counter = 0;  
    
    var colors = ['pink','yellow','green']
    var length = colors.length;
    
    function touchEven(evt){

             var x = evt.clientX,
                 y = evt.clientY;

            console.log("click: "+ x +","+ y);
   } 

    function start(){
             document.getElementById("main").addEventLintener("click",touchEven,false);  
             startGame();
         }

    function startGame(){
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext('2d');

        var ballX = Math.floor(Math.random()*600);
        var ballY = Math.floor(Math.random()*450);
        var ballR = Math.floor(Math.random()*80);

        canvas.width = 640;
        canvas.height = 480;

        ctx.fillStyle = colors[counter % length];
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2 , true);
        ctx.fill();


        if (counter >= 20 ) {
            gameOver();

        }else{
         timeoutVar =setTimeout(start,2000)
        counter = counter + 1;

        }

      }
    function gameOver(){
        console.log("counter:"+counter);
    }


      return{
        start:start
      }
      


}) ();

gameModule.start();
