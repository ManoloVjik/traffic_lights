// It's the classes block of Traffic Lights simulator
class Tr_Light {
    constructor (leftUpX, leftUpY, attitude, type) {
        this.leftUpX = leftUpX;
        this.leftUpY = leftUpY;
        this.attitude = attitude;
        this.type = type;
    }

    tr_Builder() {
        //build a traffic light primitive
        //it depends of Type - for cars or for pedestrians
        moveTo(this.leftUpX, this.leftUpY);
    }

    tr_Blinker() {
        // blink and reblink of lights 
    }
}