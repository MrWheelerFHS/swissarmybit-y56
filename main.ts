input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
})
input.onGesture(Gesture.TiltLeft, function () {
    steps += 1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() - 6)
})
let steps = 0
steps = 0
basic.forever(function () {
    while (input.buttonIsPressed(Button.AB)) {
        if (input.compassHeading() < 20 || input.compassHeading() > 340) {
            basic.showArrow(ArrowNames.North)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
})
