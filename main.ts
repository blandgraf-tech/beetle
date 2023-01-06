let direction = 0
let angle = 0
basic.forever(function () {
    direction = 1
    angle = 10
    pins.servoWritePin(AnalogPin.P0, direction)
    pins.servoWritePin(AnalogPin.P0, angle)
    basic.pause(1000)
    direction = direction * -1
    angle = 50
    pins.servoWritePin(AnalogPin.P0, direction)
    pins.servoWritePin(AnalogPin.P0, angle)
    basic.pause(1000)
})
