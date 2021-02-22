radio.onReceivedNumber(function (receivedNumber) {
    Ftemp = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Ftemp)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
let Ftemp = 0
radio.setGroup(1)
basic.forever(function () {
	
})
