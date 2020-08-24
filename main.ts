function checkDistance () {
    distance = Tinybit.Ultrasonic_Car()
    if (distance < 5) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
        Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
    } else {
        Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
    }
}
input.onButtonPressed(Button.A, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 50)
})
function checkSoundLevel () {
    level = Tinybit.Voice_Sensor()
    if (level > 150) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
        basic.showIcon(IconNames.No)
    } else if (level > 10) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
        basic.showIcon(IconNames.Happy)
    } else {
        Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
        basic.clearScreen()
    }
}
let level = 0
let distance = 0
basic.showString("Hello Chris")
basic.clearScreen()
basic.forever(function () {
    checkDistance()
})
