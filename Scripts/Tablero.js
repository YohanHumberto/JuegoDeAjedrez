import Alfil from "./Fichas/Alfil.js";
import Caballo from "./Fichas/Caballo.js";
import Peon from "./Fichas/Peon.js";
import Rey from "./Fichas/Rey.js";
import Reyna from "./Fichas/Reyna.js";
import Torre from "./Fichas/Torre.js";

let botonClick;
let coronacion;
let Turnos = 1;
let FichaBlancas = ["♔", "♕", "♗", "♘", "♖", "♙", "♙"];
let FichaNegras = ["♚", "♛", "♝", "♞", "♜", "♟", "♙"];
let params = ["🔵", "⚫"];

let btnC1 = "";
let PbtnC1 = "";
let PetC1 = "";

class Ajedrez {

    Tablero = [
        [
            { value: "♜", name: "Torre", color: "Negro" },
            { value: "♞", name: "Caballo", color: "Negro" },
            { value: "♝", name: "Alfil", color: "Negro" },
            { value: "♛", name: "Reyna", color: "Negro" },
            { value: "♚", name: "Rey", color: "Negro" },
            { value: "♝", name: "Alfil", color: "Negro" },
            { value: "♞", name: "Caballo", color: "Negro" },
            { value: "♜", name: "Torre", color: "Negro" },
        ],
        [
            { value: "♟", name: "Peon", color: "Negro" },
            { value: "♟", name: "Peon", color: "Negro" },
            { value: "♟", name: "Peon", color: "Negro" },
            { value: "♟", name: "Peon", color: "Negro" },
            { value: "♟", name: "Peon", color: "Negro" },
            { value: "♟", name: "Peon", color: "Negro" },
            { value: "♟", name: "Peon", color: "Negro" },
            { value: "♟", name: "Peon", color: "Negro" },
        ],
        [
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" }
        ],
        [
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" }],
        [
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" }
        ],
        [
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" },
            { value: "", name: "", color: "" }
        ],
        [
            { value: "♟", name: "Peon", color: "Blanco" },
            { value: "♟", name: "Peon", color: "Blanco" },
            { value: "♟", name: "Peon", color: "Blanco" },
            { value: "♟", name: "Peon", color: "Blanco" },
            { value: "♟", name: "Peon", color: "Blanco" },
            { value: "♟", name: "Peon", color: "Blanco" },
            { value: "♟", name: "Peon", color: "Blanco" },
            { value: "♟", name: "Peon", color: "Blanco" },
        ],
        [
            { value: "♜", name: "Torre", color: "Blanco" },
            { value: "♞", name: "Caballo", color: "Blanco" },
            { value: "♝", name: "Alfil", color: "Blanco" },
            { value: "♚", name: "Rey", color: "Blanco" },
            { value: "♛", name: "Reyna", color: "Blanco" },
            { value: "♝", name: "Alfil", color: "Blanco" },
            { value: "♞", name: "Caballo", color: "Blanco" },
            { value: "♜", name: "Torre", color: "Blanco" },
        ],
    ];

    constructor() {
        this.Peon = new Peon(this.Tablero);
        this.Caballo = new Caballo(this.Tablero);
        this.Torre = new Torre(this.Tablero);
        this.Alfil = new Alfil(this.Tablero);
        this.Rey = new Rey(this.Tablero);
        this.Reyna = new Reyna(this.Tablero, this.Alfil, this.Torre);
    }

    DibujarTablero() {

        let colorClaro = false;
        const Container_Ajz = document.getElementById("Container-Ajz");
        Container_Ajz.innerHTML = "";

        this.Tablero.map((item, index) => {

            colorClaro = !colorClaro;

            item.map((a, i) => {
                let ii = i;
                if (colorClaro) ii++;

                const div = document.createElement("div");
                div.className = ii % 2 != 0 ? 'colorClaro' : 'colorOscuro';
                div.innerHTML = `<button class="${a.color}" data-name="${a.name}" data-color="${a.color}">${a.value}</button>`;
                div.dataset.row = index;
                div.dataset.col = i;

                Container_Ajz.appendChild(div);
            })
        });

    }

    MoverFicha(rowOri, colOri, rowDes, colDes) {
        if (!rowOri || !colOri || !rowDes || !colDes) return;
        this.Tablero[rowDes][colDes] = this.Tablero[rowOri][colOri];
        this.Tablero[rowOri][colOri] = { value: "", name: "", color: "" };
    }

    getMovimientos(row, col, name) {
        switch (name) {
            case "Peon":
                return this.Peon.GetMovimientos(row, col);
            case "Caballo":
                return this.Caballo.GetMovimientos(row, col);
            case "Alfil":
                return this.Alfil.GetMovimientos(row, col);
            case "Torre":
                return this.Torre.GetMovimientos(row, col);
            case "Reyna":
                return this.Reyna.GetMovimientos(row, col);
            case "Rey":
                return this.Rey.GetMovimientos(row, col);
            default:
                return [];
        }
    }

    DibujarPosiblesMovimientos(movimientos) {
        this.borrarPosiblesMovimientos();
        movimientos.map(item => {
            const ele = document.querySelector(`[data-row="${item.row}"][data-col="${item.col}"]`)?.firstChild;
            const span = document.createElement("span");
            span.className = ele.textContent ? "option2" : "option1";
            span.textContent = "🔵";
            ele.appendChild(span);
        });
    }

    borrarPosiblesMovimientos() {
        document.querySelectorAll("span").forEach(a => {
            document.querySelector("span").remove();
        });
    }

}

export default Ajedrez;

