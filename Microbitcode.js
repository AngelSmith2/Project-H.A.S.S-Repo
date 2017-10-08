let Steps = 0
input.onGesture(Gesture.Shake, () => {
    Steps += 2
})
basic.forever(() => {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, () => {
    Steps = 0
})
input.onButtonPressed(Button.A, () => {
    basic.showNumber(Steps)
})