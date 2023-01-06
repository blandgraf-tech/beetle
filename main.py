def on_forever():
    DFRobotMaqueenPlus.servo_run(Servos.S1, 10)
    basic.pause(1000)
    DFRobotMaqueenPlus.servo_run(Servos.S1, 110)
basic.forever(on_forever)
