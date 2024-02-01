loadSprite('mars', 'sprites/mars.png')

add([
    sprite('mars'),
    fixed(),
    scale(1)
])

loadSpriteAtlas('sprites/tiles.png', {
    'platform-left': {
        x: 36,
        y: 36,
        width: 74,
        height: 74
    },
    'platform-middle': {
        x: 72,
        y: 72,
        width: 74,
        height: 74
    },
    'platform-right': {
        x: 144,
        y: 144,
        width: 74,
        height: 74
    },
    'smaller-tree': {
        x: 80,
        y: 80,
        width: 74,
        height: 74
    },
    'bigger-tree': {
        x: 60,
        y: 60,
        width: 74,
        height: 74
    },
    'ground': {
        x: 300,
        y: 300,
        width: 74,
        height: 74
    },
    'ground-deep': {
        x: 720,
        y: 720,
        width: 74,
        height: 74
    }
})

const map = addLevel([
    '								',
    '								',
    '								',
    '								',
    '								',
    '								',
    '								',
    '0000000011111233334555666667789',
    '3455566666778900000000111112333',
    '0011111233334500000055666667789',
], {
    tileWidth: 72,
    tileHeight: 72,
    tiles: {
        0: () => [
            sprite('platform-left'),
            area(),
            body({isStatic:true})
        ],

        1:() => [
            sprite('platform-middle'),
            area(),
            body({isStatic:true})
        ],

        2: () => [
            sprite('platform-right'),
            area(),
            body({isStatic:true})
        ],

        3:() => [
            sprite('ground'),
            area(),
            body({isStatic:true})
        ],

        4: () => [
            sprite('ground-deep'),
            area(),
            body({isStatic:true})
        ],

        5:() => [
            sprite('ground-deep'),
            area(),
            body({isStatic:true})
        ]

    }

})

