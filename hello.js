const Five = require('johnny-five');
const board = new Five.Board();

board.on('ready', () => {
    const led = new Five.Led(13);
    led.strobe();
});
