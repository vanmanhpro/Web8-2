class BulletControl
{
  constructor(x, y)
  {
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', 'BulletType1.png');
    Nakama.game.physics.arcade.enable(this.sprite);

    this.sprite.update = this.update.bind(this);
  }
  update()
  {
    this.sprite.position.y = Math.max(-100, this.sprite.position.y - 10);
  }
}
