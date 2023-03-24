import Peon from "./Fichas/Peon.js";

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
            { value: "♙", name: "Peon", color: "Blanco" },
            { value: "♙", name: "Peon", color: "Blanco" },
            { value: "♙", name: "Peon", color: "Blanco" },
            { value: "♙", name: "Peon", color: "Blanco" },
            { value: "♙", name: "Peon", color: "Blanco" },
            { value: "♙", name: "Peon", color: "Blanco" },
            { value: "♙", name: "Peon", color: "Blanco" },
            { value: "♙", name: "Peon", color: "Blanco" },
        ],
        [
            { value: "♖", name: "Torre", color: "Blanco" },
            { value: "♘", name: "Caballo", color: "Blanco" },
            { value: "♗", name: "Alfil", color: "Blanco" },
            { value: "♔", name: "Rey", color: "Blanco" },
            { value: "♕", name: "Reyna", color: "Blanco" },
            { value: "♗", name: "Alfil", color: "Blanco" },
            { value: "♘", name: "Caballo", color: "Blanco" },
            { value: "♖", name: "Torre", color: "Blanco" },
        ],
    ];

    constructor() {
        this.Peon = new Peon(this.Tablero);
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
                div.innerHTML = `<button data-name="${a.name}" data-color="${a.color}">${a.value}</button>`;
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

    getMovimientos(row, col, color, name) {
        switch (name) {
            case "Peon":
                return this.Peon.GetMovimientos(row, col, color);
            default:
                return [];
        }
    }

    GetMovimientosPeon(row, col, tipo) {
        row = parseInt(row);
        col = parseInt(col);

        const posiciones = [];
        let rowInicial = tipo == "Negro" ? 1 : 6;
        let nextRowNormal = row + (tipo == "Negro" ? 1 : -1);
        let nextRowOrdinal = row + (tipo == "Negro" ? 2 : -2);

        if (this.Tablero[nextRowNormal][col]?.value == "") posiciones.push({ row: nextRowNormal, col: col });
        if (row == rowInicial && this.Tablero[nextRowOrdinal][col]?.value == "") posiciones.push({ row: nextRowOrdinal, col: col });
        if (this.Tablero[nextRowNormal][col - 1]?.value != "" && (col - 1) >= 0) posiciones.push({ row: nextRowNormal, col: col - 1 });
        if (this.Tablero[nextRowNormal][col + 1]?.value != "" && (col + 1) < this.Tablero.length) posiciones.push({ row: nextRowNormal, col: col + 1 });

        return posiciones;
    }

    DibujarPosiblesMovimientos(color, movimientos) {
        this.borrarPosiblesMovimientos();
        movimientos.map(item => {
            const ele = document.querySelector(`[data-row="${item.row}"][data-col="${item.col}"]`)?.firstChild;

            if (ele.dataset.color != color) {
                const span = document.createElement("span");
                span.className = ele.textContent ? "option2" : "option1";
                span.textContent = "⚪";
                ele.appendChild(span);
            }
        });
    }

    borrarPosiblesMovimientos() {
        document.querySelectorAll("span").forEach(a => {
            document.querySelector("span").remove();
        });
    }

}

export default Ajedrez;

