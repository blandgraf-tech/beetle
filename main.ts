pins.servoWritePin(AnalogPin.P0, 45)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P0, 90)
basic.pause(1000)
DFRobotMaqueenPlus.PID(PID.ON)
DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 60)
basic.pause(5000)
DFRobotMaqueenPlus.mototStop(Motors.M1)
basic.pause(1000)
DFRobotMaqueenPlus.mototStop(Motors.ALL)
DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 60)
basic.pause(2000)
DFRobotMaqueenPlus.mototStop(Motors.ALL)
pins.servoWritePin(AnalogPin.P0, 45)
