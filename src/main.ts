import Phaser from 'phaser';

import Game from './game';

export default new Phaser.Game({
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 200,
      },
      debug: true,
    },
  },
  scene: [Game],
});
