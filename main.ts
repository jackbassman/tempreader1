radio.onReceivedNumber(function (receivedNumber) {
    Ftemp = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Ftemp)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(tempLOCAL)
})
let tempLOCAL = 0
let Ftemp = 0
radio.setGroup(1)
basic.forever(function () {
    tempLOCAL = input.temperature()
    tempLOCAL = tempLOCAL * 2
    tempLOCAL = tempLOCAL + 30
})
