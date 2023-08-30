//your code here
// Game pixel_count is the pixel on the horizontal and vertical axix of the game board (Square)
const GAME_PIXEL_COUNT = 40;
const SQUARE_OF_GAME_PIXEL_COUNT= Math.pow(GAME_PIXEL_COUNT,2);

let changeTheDirection = false;
let totalFoodAte = 0;
let totalDistanceTravell =0;

const gameContainer = document.getElelmentById("gameContainer")

