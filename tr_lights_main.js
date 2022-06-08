// It's the main block of Traffic Lights simulator
// I'll use HTML CANVAS vithout any libraries
//let ctx;
const canvas = document.getElementById("maincanvas");
//console.log('we drew the canvas');



if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    
    function drawRoads() {
        ctx.beginPath();
        ctx.moveTo(200,0);
        ctx.lineTo(200,200);
        ctx.stroke();
    }

    ctx.fillRect(10,10,50,50);
    
    drawRoads();
}

