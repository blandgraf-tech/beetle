def on_forever():
    pins.servo_write_pin(AnalogPin.P0, 0)
    basic.pause(1000)
    pins.servo_write_pin(AnalogPin.P0, 45)
    basic.pause(1000)
basic.forever(on_forever)
