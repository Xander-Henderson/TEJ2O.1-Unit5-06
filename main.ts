/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alexander
 * Created on: Oct 2025
 * This program will tell the distance in cm to the sonar.
*/

// variables
let distanceToObjest: number = 1

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
// gets distance to object in cm
    basic.clearScreen()
    sonar.ping(DigitalPin.P0, DigitalPin.P0, PingUnit.Centimeters)

// shows the distance to object
    basic.showNumber(distanceToObjest)
    basic.showIcon(IconNames.Happy)
})
