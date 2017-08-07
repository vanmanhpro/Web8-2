class BulletType1Controller extends BulletController {
  constructor(x, y, spriteSuffix, configs){
    super(x, y, 
    	 `BulletType${spriteSuffix}.png`, 
    	 configs);

    this.sprite.body.velocity.y = -1500;
  }
}
