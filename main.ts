input.onButtonPressed(Button.A, function () {
    Delay += 100
})
input.onButtonPressed(Button.B, function () {
    Delay += -100
})
basic.showIcon(IconNames.Happy)
pins.digitalWritePin(DigitalPin.P16, 0)
let Delay = 1000
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(Delay)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(Delay)
})
