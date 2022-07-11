// It's the constants block of Traffic Lights simulator
LEFTUPXY = [    //coordinates of left up corner of TrLight
    100,        // 0
    100,        // 1
    100,        // 2
    100,        // 3
    50,         // 4
];

ATTITUDE = [        // horizontal or vertical attitude of the traffic lights
    'horizont',     // 0 - horizontal attitude
    'vertical',     // 1 - vertical attitude
];

TYPE = [
    '3x',   // 0 - for cars
    '2x',   // 1 - for pedestrians
];

COLORS = [
    'red',          // 0
    'yellow',       // 1
    'green',        // 2
    'grey',         // 3
    'LightGrey',    // 4
    'black',        // 5
    'white',        // 6
];

COORD = [
    0,
    250,
    350,
];

ARCS_BLENDS = [            // points for ARC-building (arc blends above the lights)
    1.1*Math.PI,    // 0 - begin point for vertical light line
    1.9*Math.PI,    // 1 - end point for vertical light line
    0.6*Math.PI,    // 2 - begin point for horizontal light line
    1.4*Math.PI,    // 3 - end point for horizontal light line
]

DELTA = [
    20, // 0 - deltaX for vertical
    
]