class BulletType2Controller extends BulletController {
  constructor(x, y, spriteSuffix, configs){
    super(x, y,
    	 `BulletType${spriteSuffix}.png`,
    	  configs);

    this.SPEED = 250;
    this.TURN_RATE = 5;
    this.sprite.update = this.update.bind(this);
  }
  update(){
  	var enemyLocation = Nakama.enemyGroup.getFirstAlive();
    if (enemyLocation !== null){  
    	var targetAngle = Nakama.game.math.angleBetween(
    		this.sprite.body.x, this.sprite.body.y,
    		enemyLocation.x,
    		enemyLocation.y
    		)

    	if (this.sprite.rotation !== targetAngle + Math.PI / 2) {
    		var delta = targetAngle - this.sprite.rotation + Math.PI / 2;

    		if (delta > Math.PI) delta -= Math.PI * 2;
    		if (delta < -Math.PI) delta += Math.PI * 2;

    		if (delta > 0){
    			// Turn clockwise
    			this.sprite.angle += this.TURN_RATE;
    		} else {
    			// Turn counter-clockwise
    			this.sprite.angle -= this.TURN_RATE;
    		}
    	}

    	if (Math.abs(delta) < Nakama.game.math.degToRad(this.TURN_RATE)) {
    		this.sprite.rotation = targetAngle + Math.PI / 2;
    	}
    	this.sprite.body.velocity.x = Math.cos(this.sprite.rotation - Math.PI / 2) * this.SPEED;
    	this.sprite.body.velocity.y = Math.sin(this.sprite.rotation - Math.PI / 2) * this.SPEED;
    }
    else this.sprite.body.velocity.y = -500;
  }
}
