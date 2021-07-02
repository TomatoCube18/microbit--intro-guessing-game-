function showSign (num: number) {
    if (num == 0) {
        basic.showIcon(IconNames.Heart)
    } else if (num == 1) {
        basic.showIcon(IconNames.Target)
    } else if (num == 2) {
        basic.showIcon(IconNames.Surprised)
    } else {
        basic.showIcon(IconNames.House)
    }
}
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . # # .
        . . . . .
        . . # . .
        `)
    randomSign = Math.randomRange(0, 3)
    tempSign = 4
    while (randomSign != tempSign) {
        enterSigned = true
        while (enterSigned) {
            if (input.buttonIsPressed(Button.A)) {
                if (tempSign < 3) {
                    tempSign += 1
                    showSign(tempSign)
                } else {
                    tempSign = 0
                    showSign(tempSign)
                }
            } else if (input.buttonIsPressed(Button.B)) {
                enterSigned = false
            }
        }
        if (randomSign != tempSign) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    }
})
let enterSigned = false
let tempSign = 0
let randomSign = 0
basic.showIcon(IconNames.Ghost)
