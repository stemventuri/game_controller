Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    Kitronik_Game_Controller.runMotor(100)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire2, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    basic.clearScreen()
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    basic.clearScreen()
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showArrow(ArrowNames.South)
    drive(-1, global_speed)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    basic.clearScreen()
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showArrow(ArrowNames.North)
    drive(1, global_speed)
})
function drive (direction: number, speed: number) {
    radio.sendValue("direction", direction)
    radio.sendValue("speed", speed)
}
function steer (steer_direction: number) {
    radio.sendValue("steer_direction", steer_direction)
}
radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    basic.showString("" + (value))
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Up, function () {
    basic.clearScreen()
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Right, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showArrow(ArrowNames.East)
    steer(1)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Left, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    basic.showArrow(ArrowNames.West)
    steer(-1)
})
let global_speed = 0
Kitronik_Game_Controller.setBuzzerPin()
radio.setGroup(1)
radio.sendValue("remote", 1)
global_speed = 1000
