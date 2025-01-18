class Cat {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Cat.png"), 0, 170, 32, 32, 8, 0.15);

        this.x = 0;
        this.y = 0;
        this.speed = 200;
    };
    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) this.x = 0;
    };

    draw(ctx) {
        // ctx.drawImage(ASSET_MANAGER.getAsset("./Cyclops.png"), 0, 0);
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 5);
    };
};