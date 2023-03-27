class Torre {

    constructor(tablero) {
        this.Tablero = tablero;
    }

    GetMovimientos(row, col) {
        row = parseInt(row);
        col = parseInt(col);

        const posiciones = [];
        let obtaculo = { obtaculo1: false, obtaculo2: false, obtaculo3: false, obtaculo4: false };

        for (let index = 1; index < 8; index++) {
            agregarPocision(row - index, col, "obtaculo1", this.Tablero);
            agregarPocision(row + index, col, "obtaculo2", this.Tablero);
            agregarPocision(row, col + index, "obtaculo3", this.Tablero);
            agregarPocision(row, col - index, "obtaculo4", this.Tablero);
        }

        function agregarPocision(roww, coll, obtaculoS, tablero) {
            if (roww < 8 && coll < 8 && roww >= 0 && coll >= 0) {
                if (!obtaculo[`${obtaculoS}`] && tablero[roww][coll].color != tablero[row][col].color) posiciones.push({ row: roww, col: coll });
                if (tablero[roww][coll].value != "") obtaculo[`${obtaculoS}`] = true;
            }
        }

        return posiciones;
    }
}

export default Torre;