// It's the classes block of Traffic Lights simulator
class Tr_Light {
    constructor (leftUpX, leftUpY, attitude, types, ctxx) {
        this.leftUpX = leftUpX;
        this.leftUpY = leftUpY;
        this.attitude = attitude;
        this.types = types;
        this.ctxx = ctxx;
        let redd = false, yell = false, zell = false;
    }

    tr_Builder(red, yel, zel) {   // red, yel, zel
        //build a traffic light primitive
        //it depends of Type - for cars or for pedestrians
        //moveTo(this.leftUpX, this.leftUpY);
        console.log('it is tr_Builder');   
        console.log(red, yel, zel);
        
        this.ctxx.beginPath(); //draw the grey box for the traffic-light
        this.ctxx.fillStyle = COLORS[3];
        this.ctxx.fillRect(this.leftUpX, this.leftUpY, 40, 82);
        this.ctxx.fill();

        this.ctxx.beginPath(); //draw 3 lights
        this.ctxx.fillStyle = COLORS[4];
        this.ctxx.arc((this.leftUpX+20), (this.leftUpY+14), 12, 0, 2*Math.PI);
        this.ctxx.arc((this.leftUpX+20), (this.leftUpY+40), 12, 0, 2*Math.PI);
        this.ctxx.arc((this.leftUpX+20), (this.leftUpY+66), 12, 0, 2*Math.PI);
        this.ctxx.fill();

        this.ctxx.beginPath(); //draw 3 sun-blind arcs above lights
        this.ctxx.strokeStyle = COLORS[5];
        this.ctxx.lineWidth = 2;
        this.ctxx.arc((this.leftUpX+20), (this.leftUpY+14), 13, 1.1*Math.PI, 1.9*Math.PI);
        this.ctxx.stroke();
        this.ctxx.beginPath();
        this.ctxx.arc((this.leftUpX+20), (this.leftUpY+40), 13, 1.1*Math.PI, 1.9*Math.PI);
        this.ctxx.stroke();
        this.ctxx.beginPath();
        this.ctxx.arc((this.leftUpX+20), (this.leftUpY+66), 13, 1.1*Math.PI, 1.9*Math.PI);
        this.ctxx.stroke();
        

        if (red) {
            console.log('red!');
            this.ctxx.beginPath();
            this.ctxx.fillStyle = COLORS[0];
            this.ctxx.arc((this.leftUpX+20), (this.leftUpY+14), 12, 0, 2*Math.PI);
            this.ctxx.fill();
        }

        if (yel) {
            this.ctxx.beginPath();
            this.ctxx.fillStyle = COLORS[1];
            this.ctxx.arc((this.leftUpX+20), (this.leftUpY+40), 12, 0, 2*Math.PI);
            this.ctxx.fill();
        }

        if (zel) {
            this.ctxx.beginPath();
            this.ctxx.fillStyle = COLORS[2];
            this.ctxx.arc((this.leftUpX+20), (this.leftUpY+66), 12, 0, 2*Math.PI);
            this.ctxx.fill();
        }
    }

    tr_Blinker() {
        // blink and reblink of lights 

    }
}