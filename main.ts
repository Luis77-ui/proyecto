namespace SpriteKind {
    export const recolectable = SpriteKind.create()
}
function iniciarnivel () {
    scene.setBackgroundColor(randint(6, 8))
    contador = 0
    for (let index = 0; index <= 10 + nivel_1; index++) {
        basura = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ........dd55........
            ........5555........
            .........44.........
            ........dddd........
            ......3.dddd........
            ......3dddddd.......
            ......3dddddd.......
            .......dddddd.......
            .......dddddd.......
            .......dddddd.......
            .......dddddd.......
            ........dddd........
            ........4444........
            ....................
            `, SpriteKind.recolectable)
        basura.setPosition(randint(20, 140), randint(20, 100))
    }
    player1.sayText("nive" + nivel_1)
    info.startCountdown(10)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.recolectable, function (sprite, otherSprite) {
    contador += 1
    info.changeScoreBy(1)
    otherSprite.destroy()
    otherSprite.startEffect(effects.smiles, 200)
    if (contador > 0) {
    	
    } else {
    	
    }
})
let basura: Sprite = null
let contador = 0
let player1: Sprite = null
let nivel_1 = 0
game.splash("Recolecta la mayor cantidad de basura posible  ")
nivel_1 = 0
player1 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(player1, 70, 70)
iniciarnivel()
