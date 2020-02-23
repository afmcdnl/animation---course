function Glow (num: number) {
    for (let index = 0; index < num; index++) {
        _1.showImage(0)
        _2.showImage(0)
        _3.showImage(0)
        _4.showImage(0)
        _5.showImage(0)
        _4.showImage(0)
        _3.showImage(0)
        _2.showImage(0)
        _1.showImage(0)
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.A, function () {
    Glow(3)
})
let _5: Image = null
let _4: Image = null
let _3: Image = null
let _2: Image = null
let _1: Image = null
_1 = images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
_2 = images.createImage(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
_3 = images.createImage(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
_4 = images.createImage(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . . # . .
    `)
_5 = images.createImage(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
