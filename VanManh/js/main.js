
var Nakama = {};
Nakama.configs = {
  GAME_WIDTH: 640,
  GAME_HEIGHT: 960
};

window.onload = function(){
  Nakama.game = new Phaser.Game(
    Nakama.configs.GAME_WIDTH,
    Nakama.configs.GAME_HEIGHT,
    Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

// preparations before game starts
var preload = function(){
  Nakama.game.scale.minWidth = Nakama.configs.GAME_WIDTH/2;
  Nakama.game.scale.minHeight =  Nakama.configs.GAME_HEIGHT/2;
  Nakama.game.scale.maxWidth =  Nakama.configs.GAME_WIDTH;
  Nakama.game.scale.maxHeight =  Nakama.configs.GAME_HEIGHT;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.background = Nakama.game.add.sprite(0, -960, 'background');
  Nakama.player = Nakama.game.add.sprite(200, 400, 'assets', 'Spaceship1-Player.png');
  Nakama.playerLeft = Nakama.game.add.sprite(200, 400, 'assets', 'Spaceship1Left-Player.png');
  Nakama.playerRight = Nakama.game.add.sprite(200, 400, 'assets', 'Spaceship1Right-Player.png');
  Nakama.partner = Nakama.game.add.sprite(200, 400, 'assets', 'Spaceship1-Partner.png');
  Nakama.partnerLeft = Nakama.game.add.sprite(200, 400, 'assets', 'Spaceship1Left-Partner.png');
  Nakama.partnerRight = Nakama.game.add.sprite(200, 400, 'assets', 'Spaceship1Right-Partner.png');
  Nakama.sidekick = Nakama.game.add.sprite(200, 400, 'assets', 'Spaceship2-Player.png');
}

// update game state each frame
var update = function(){
  // player
  if(Nakama.keyboard.isDown(Phaser.Keyboard.LEFT)){
    Nakama.player.position.x = Math.max( 0, Nakama.player.position.x - 10);
    Nakama.playerLeft.position = Nakama.player.position;
  }
  if(Nakama.keyboard.isDown(Phaser.Keyboard.RIGHT)){
    //console(Nakama.player.position.y);
    Nakama.player.position.x = Math.min( Nakama.configs.GAME_WIDTH - Nakama.player.width, Nakama.player.position.x + 10);
  }
  if(Nakama.keyboard.isDown(Phaser.Keyboard.DOWN)){
    //console(Nakama.player.position.y);
    Nakama.player.position.y = Math.min( Nakama.configs.GAME_HEIGHT - Nakama.player.height, Nakama.player.position.y + 10);
  }
  if(Nakama.keyboard.isDown(Phaser.Keyboard.UP)){
    Nakama.player.position.y = Math.max( 0, Nakama.player.position.y - 10);
  }

  //partner
  if(Nakama.keyboard.isDown(Phaser.Keyboard.A)){
    Nakama.partner.position.x = Math.max( 0, Nakama.partner.position.x - 10);
  }
  if(Nakama.keyboard.isDown(Phaser.Keyboard.D)){
    //console(Nakama.player.position.y);
    Nakama.partner.position.x = Math.min( Nakama.configs.GAME_WIDTH - Nakama.partner.width, Nakama.partner.position.x + 10);
  }
  if(Nakama.keyboard.isDown(Phaser.Keyboard.S)){
    //console(Nakama.player.position.y);
    Nakama.partner.position.y = Math.min( Nakama.configs.GAME_HEIGHT - Nakama.partner.height, Nakama.partner.position.y + 10);
  }
  if(Nakama.keyboard.isDown(Phaser.Keyboard.W)){
    Nakama.partner.position.y = Math.max( 0, Nakama.partner.position.y - 10);
  }

  //sidekick
  if(Nakama.keyboard.isDown(Phaser.Keyboard.NUMPAD_1)){
    Nakama.sidekick.position.x = Math.max( 0, Nakama.sidekick.position.x - 10);
  }
  if(Nakama.keyboard.isDown(Phaser.Keyboard.NUMPAD_3)){
    //console(Nakama.sidekick.position.y);
    Nakama.sidekick.position.x = Math.min( Nakama.configs.GAME_WIDTH - Nakama.sidekick.width, Nakama.sidekick.position.x + 10);
  }
  if(Nakama.keyboard.isDown(Phaser.Keyboard.NUMPAD_2)){
    //console(Nakama.sidekick.position.y);
    Nakama.sidekick.position.y = Math.min( Nakama.configs.GAME_HEIGHT - Nakama.sidekick.height, Nakama.sidekick.position.y + 10);
  }
  if(Nakama.keyboard.isDown(Phaser.Keyboard.NUMPAD_5)){
    Nakama.sidekick.position.y = Math.max( 0, Nakama.sidekick.position.y - 10);
  }

  //roll the map
  Nakama.background.position.y += 5;
  if (Nakama.background.position.y > 0) Nakama.background.position.y -= 960;
}

// before camera render (mostly for debug)
var render = function(){}
