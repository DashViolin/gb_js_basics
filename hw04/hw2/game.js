let game = {
    run() {
        while (true) {
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра окончена.");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            if(nextPoint.x >= 0 && nextPoint.x < config.colsCount && nextPoint.y >= 0 && nextPoint.y < config.rowsCount) {
                renderer.clear();
                player.move(nextPoint);
                renderer.render();
            }
        }
    },
    init() {
        console.log("Ваше положение - о.");
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();
