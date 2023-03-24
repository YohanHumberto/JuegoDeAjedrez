// import Ajedrez from "./Tablero.js"

class Game {

    fichaSeleccionada = { row: null, col: null, color: null, name: null };

    constructor(Ajedrez) {
        this.ajedrez = Ajedrez;
    }

    IniciarJuego() {
        this.ajedrez.DibujarTablero();
        this.Eventos();
    }

    Eventos() {
        document.addEventListener("click", (e) => {
            if (e.target.className == "option1" || e.target.className == "option2") e.target.parentElement.click();
            if (e.target.dataset.name == undefined) return;

            if (e.target.dataset.name != "" && this.fichaSeleccionada.color == e.target.dataset.color || this.fichaSeleccionada.color == null) {
                this.seleccionarFicha(e)
            } else {
                this.moverFicha(e);
            }
        });
    }

    seleccionarFicha(e) {
        if (e.target.dataset.name.length > 0) {
            const { row, col } = e.target.parentElement.dataset;
            const { color, name } = e.target.dataset;

            for (let item of document.querySelector("#Container-Ajz").children) {
                const data1 = item.dataset;
                if (data1.row != row || data1.col != col) item.firstChild.style.border = "";
            }

            if (e.target.style.border.length > 0) {
                e.target.style.border = "";
                this.fichaSeleccionada.row = null;
                this.fichaSeleccionada.col = null;
                this.fichaSeleccionada.color = null;
                this.fichaSeleccionada.name = null;
                this.ajedrez.borrarPosiblesMovimientos();
            } else {
                e.target.style.border = "7px solid white";
                this.fichaSeleccionada.row = row;
                this.fichaSeleccionada.col = col;
                this.fichaSeleccionada.color = color;
                this.fichaSeleccionada.name = name;
                const movimientos = this.ajedrez.getMovimientos(row, col, color, name);
                this.ajedrez.DibujarPosiblesMovimientos(color, movimientos)
            }
        }

    }

    moverFicha(e) {
        const dataset = e.target.parentElement.dataset;
        const { row, col, color, name } = this.fichaSeleccionada;
        const movimientos = this.ajedrez.getMovimientos(row, col, color, name);
        const ele = movimientos.find(a => a.row == dataset.row && a.col == dataset.col);

        if (ele) {
            this.ajedrez.MoverFicha(row, col, dataset.row, dataset.col);
            this.ajedrez.DibujarTablero();
            this.fichaSeleccionada.row = null;
            this.fichaSeleccionada.col = null;
            this.fichaSeleccionada.color = null;
            this.fichaSeleccionada.name = null;
        }
        // else{
        //     alertify.dismissAll();
        //     alertify.notify('invalid movement', 'warning', 2); 
        // }
    }

}

export default Game;