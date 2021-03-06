import Phaser from "phaser";
import { m_bg } from "./GameScene"

let win1;
let bg;

let Menu;

class Player1Win extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Player1Win'
        });
    }

    preload() {
        this.load.image('player1Win', 'src/image/Win/player1Win.png');
        this.load.image('player1WinText', 'src/image/Win/player1WinText.png');

        this.load.image('bg', 'src/image/BG/white-bg.jpg');

        this.load.audio('win', 'src/sound/winSound.mp3');

        this.load.image('fightBGWin', 'src/image/fightBG/bgninja.jpg');

        this.load.image('menu', 'src/image/Win/menu.png');
    }

    create() {
        m_bg.stop();

        bg = this.add.image(0, -100, 'fightBGWin');
        bg.setOrigin(0, 0);
        bg.setScale(0.67);

        Menu = this.physics.add.image(900, 360, 'menu');
        Menu.setInteractive();

        Menu.on('pointerover', () => {
            Menu.setScale(1.2);
        });

        Menu.on('pointerout', () => {
            Menu.setScale(1);
        });

        Menu.on('pointerdown', () => {
            Menu.setScale(1);
            win1.stop();
            location.reload();
        });

        win1 = this.sound.add('win').setVolume(0.2);
        win1.play({ loop: false });

        this.add.image(350, 300, 'player1Win');
        this.add.image(350, 600, 'player1WinText').setScale(0.5);
    }

    update(delta, time) {

    }
}

export default Player1Win;
export { win1 };