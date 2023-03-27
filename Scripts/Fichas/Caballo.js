class Caballo {

    constructor(tablero) {
        this.Tablero = tablero;
    }

    GetMovimientos(row, col) {
        row = parseInt(row);
        col = parseInt(col);

        const posiciones = [];
        const eleSelect = this.Tablero[row][col];

        agregarPocision(row - 1, col - 2, this.Tablero);
        agregarPocision(row - 1, col + 2, this.Tablero);
        agregarPocision(row + 1, col - 2, this.Tablero);
        agregarPocision(row + 1, col + 2, this.Tablero);
        agregarPocision(row + 2, col + 1, this.Tablero);
        agregarPocision(row + 2, col - 1, this.Tablero);
        agregarPocision(row - 2, col - 1, this.Tablero);
        agregarPocision(row - 2, col + 1, this.Tablero);

        function agregarPocision(roww, coll, tablero) {
            if (roww < 8 && coll < 8 && roww >= 0 && coll >= 0) {
                if (tablero[roww][coll]?.value == "" || tablero[roww][coll].color != eleSelect.color) {
                    posiciones.push({ row: roww, col: coll });
                }
            }
        }

        return posiciones;
    }

}

export default Caballo;