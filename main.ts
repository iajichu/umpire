input.onButtonPressed(Button.A, function () {
    strikes += 1
    basic.showNumber(strikes)
    if (strikes == 3) {
        balls = 0
        strikes = 0
        basic.showString("Strike 3 out")
    }
})
input.onButtonPressed(Button.B, function () {
    balls += 1
    basic.showNumber(balls)
    if (balls == 4) {
        balls = 0
        strikes += 0
        basic.showString("ball 4 take your base")
    }
})
let strikes = 0
let balls = 0
balls = 0
strikes = 0
