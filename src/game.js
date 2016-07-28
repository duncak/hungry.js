var stageWidth = 640;
var stageHeight = 480;

Crafty.init(stageWidth, stageHeight);
Crafty.background('#00BFFF');

Crafty.e('Floor');
Crafty.e('Platforms')
	.platforms()
	.platforms()
	.platforms()
	.platforms()
	.platforms(0,0,0,3,0,0,3,0,0,3)

	.platforms()
	.platforms(1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1)
	.platforms()
	.platforms(0,7,0,0,0,0,7)
	.platforms()

	.platforms()
	.platforms(0,0,0,0,0,0,0,0,4)
	.platforms(4,0,0,0,0,0,0,0,0,0,0,0,0,4)
	.platforms()
	.platforms(0,0,4,0,0,0,0,0,0,0,0,4)

	.platforms()
	.platforms(0,0,0,0,4,0,0,0,0,4)
	.platforms()
	.platforms();

Crafty.e('Bird').enemy(stageWidth/2-6, 48);

Crafty.e('Bear').enemy(stageWidth-50, stageHeight-24);

Crafty.e('Player')
	.player(250, stageHeight-24, 24, 24, '#000');
