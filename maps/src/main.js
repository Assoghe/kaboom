import kaboom from "kaboom";

kaboom()



scene('world', (worldState)=> setWorld(worldState))
go('world')



loadSpriteAtlas('sprites/tiles.png', {
	'tile': { x: 0, y: 0, width: 720, height: 720, sliceX: 20, sliceY: 20,
		anims: {
			'bloc2': 0,
			'bloc3': 125,
			'bloc4': 250,
			'bloc5':86,
			'bloc52': 52
		}
}})

function setWorld(worldState) {
	camScale(1)

	function makeTile(type) {
		return [
			sprite('tile'),
			{type}
		]
	}

	const map = [
		addLevel([
			'									',
			'									',
			'									',
			'									',
			'									',
			'01111111111123333333222222222222222',
			'       0111111111112222222222222222',
			'		0111111111112222222222222222',
			'		0111111111112222222222222222',
			'		0111111111112222222222222222',
			'	55550111111111112222222222222222',
			'		0111111111112222222222222222',
			'		0111111111112222222222222222',
			'		0111111111112222222222222222',
			'		0111111111112222222222222222',
			'		0111111111112222222222222222',
			'		0111111111112222222222222222',
			'33333333333333333333333333333333333'
		], {
			tileWidth: 36,
			tileHeight: 36,
			tiles: {
				'0': () => makeTile('bloc2'),
				'1': () => makeTile('bloc3'),
				'2': () => makeTile('bloc4'),
				'3': () => makeTile('bloc5'),
				'5': () => makeTile('bloc52'),
			}
		})


	]

	for (const layer of map) {
		layer.use(scale(1))
		for (const tile of layer.children) {
			if (tile.type) {
				tile.play(tile.type)
			}
		}
	}
}