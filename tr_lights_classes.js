// It's the classes block of Traffic Lights simulator
class Tr_Light {
    constructor (leftUpX, leftUpY, attitude, types, ctxx) {
        this.leftUpX = leftUpX;
        this.leftUpY = leftUpY;
        this.attitude = attitude;
        this.types = types;
        this.ctxx = ctxx;
    }

    tr_Builder() {
        //build a traffic light primitive
        //it depends of Type - for cars or for pedestrians
        //moveTo(this.leftUpX, this.leftUpY);
        console.log('it is tr_Builder');
        this.ctxx.beginPath();
        this.ctxx.fillStyle = "black"; //COLORS[5];
        this.ctxx.fillRect(this.leftUpX, this.leftUpY, 40, 70);
        this.ctxx.fill();
    }

    tr_Blinker() {
        // blink and reblink of lights 
    }
}