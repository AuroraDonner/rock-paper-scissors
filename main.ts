input.onPinPressed(TouchPin.P0, function () {
    basic.showString("WINS:")
    basic.showNumber(UserScore)
    basic.clearScreen()
})
function Game () {
    ComputerChoice = randint(1, 3)
    if (UserChoice == 1 && ComputerChoice == 2) {
        basic.showString("PAPER")
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
        basic.showString("LOSS")
        UserLoss += 1
        basic.showNumber(UserScore)
        basic.clearScreen()
    } else if (UserChoice == 2 && ComputerChoice == 3) {
        basic.showString("SCISSORS")
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
        basic.showString("LOSS")
        UserLoss += 1
        basic.showNumber(UserScore)
        basic.clearScreen()
    } else if (UserChoice == 3 && ComputerChoice == 1) {
        basic.showString("ROCK")
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
        basic.showString("LOSS")
        UserLoss += 1
        basic.showNumber(UserScore)
        basic.clearScreen()
    } else if (UserChoice == 1 && ComputerChoice == 3) {
        basic.showString("SCISSORS")
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.showString("WIN")
        UserScore += 1
        basic.showNumber(UserScore)
        basic.clearScreen()
    } else if (UserChoice == 2 && ComputerChoice == 1) {
        basic.showString("ROCK")
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.showString("WIN")
        UserScore += 1
        basic.showNumber(UserScore)
        basic.clearScreen()
    } else if (UserChoice == 3 && ComputerChoice == 2) {
        basic.showString("PAPER")
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        basic.showString("WIN")
        UserScore += 1
        basic.showNumber(UserScore)
        basic.clearScreen()
    } else {
        basic.showString("TIE")
        UserTie += 1
        basic.showNumber(UserScore)
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.A, function () {
    UserChoice = 1
    basic.showString("ROCK")
    Game()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("LOSSES:")
    basic.showNumber(UserLoss)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    UserChoice = 3
    basic.showString("SCISSORS")
    Game()
})
input.onButtonPressed(Button.B, function () {
    UserChoice = 2
    basic.showString("PAPER")
    Game()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString("TIES:")
    basic.showNumber(UserTie)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    UserScore = 0
    UserLoss = 0
    UserTie = 0
    basic.showNumber(UserScore)
    basic.clearScreen()
})
let UserTie = 0
let UserLoss = 0
let UserScore = 0
let UserChoice = 0
let ComputerChoice = 0
ComputerChoice = 0
UserChoice = 0
UserScore = 0
UserLoss = 0
UserTie = 0
