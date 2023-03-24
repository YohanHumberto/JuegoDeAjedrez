import Game from "./Game.js"
import Ajedrez from "./Tablero.js"

class Main {
    static main() {
        const game = new Game(new Ajedrez());
        game.IniciarJuego();
    }
}

Main.main();