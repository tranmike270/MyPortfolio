$(document).ready(function(){
    $(".load-top").addClass("load-indicator");

    $("#opening").addClass("fade-delay");

    $("#header").addClass("visible");

    var canvas = document.getElementById("canvas"); 
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90

   
 
    setInterval(function(){
        ctx.clearRect(-250, -250, canvas.width, canvas.height);
        drawClock();
    }, 1000);

    function drawClock() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawFace(ctx, radius);
        drawLines(ctx, radius);
        drawTime(ctx, radius);

    }

    function drawFace(ctx, radius){

        ctx.arc(0, 0, radius, 0 , 2*Math.PI);
        ctx.shadowBlur= 30;
        ctx.shadowColor="white"
        ctx.fillStyle = "black";
        ctx.fill();


        ctx.beginPath();
        ctx.arc(0, 0, radius*0.05, 0, 2*Math.PI);
        ctx.shadowColor = "transparent";
        ctx.fillStyle = 'white';
        ctx.fill();

    }

    function drawLines(ctx,radius){
        var ang;

            ang = 1 * Math.PI / 30;
            
            for(var i = 0; i < 4; i++){  
                ctx.fillRect(-180,-2.5, -65, 5);
                for(var j = 0; j < 4; j ++){
                    ctx.rotate(ang);    
                    ctx.fillRect(-230,-2.5, -15, 5);
                }              
                ctx.rotate(ang);
                ctx.fillRect(-190,-2.5, -55, 5);
                for(var j = 0; j < 4; j ++){
                    ctx.rotate(ang);
                    ctx.fillRect(-230,-2.5, -15, 5);
                }
                ctx.rotate(ang);
                ctx.fillRect(-190,-2.5, -55, 5);
                for(var j = 0; j < 4; j ++){
                    ctx.rotate(ang);
                    ctx.fillRect(-230,-2.5, -15, 5);
                }
                ctx.rotate(ang);
                ctx.fillRect(-180,-2.5, -65, 5);
            }
            
           
        // }

    }
    function drawTime(ctx, radius){
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //hour
        hour=hour%12;
        hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
        drawHand(ctx, hour, radius*0.5, radius*0.06);
        //minute
        minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
        drawHand(ctx, minute, radius*0.8, radius*0.055);
        // second
        second=(second*Math.PI/30);
        drawHand(ctx, second, radius*1, radius*0.01);
    }
    
    function drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.strokeStyle = "white";
        ctx.moveTo(0,0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }
})