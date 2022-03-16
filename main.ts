let distancia = 0
basic.forever(function () {
    distancia = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (distancia < 60) {
        basic.showString("" + (distancia))
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 5)
        basic.pause(100)
        if (distancia < 10) {
            basic.showString("" + (distancia))
            maqueen.motorStop(maqueen.Motors.All)
            basic.pause(5000)
            basic.showLeds(`
                # . # . #
                . # # # .
                # # # # #
                . # # # .
                # . # . #
                `)
        } else {
        	
        }
    }
})
