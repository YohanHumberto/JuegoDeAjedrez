class Peon {

    constructor(tablero) {
        this.Tablero = tablero;
    }

    GetMovimientos(row, col) {
        row = parseInt(row);
        col = parseInt(col);

        const posiciones = [];
        const eleSelect = this.Tablero[row][col];
        let rowInicial = eleSelect.color == "Negro" ? 1 : 6;
        let nextRowNormal = row + (eleSelect.color == "Negro" ? 1 : -1);
        let nextRowOrdinal = row + (eleSelect.color == "Negro" ? 2 : -2);

        agregarPocision(nextRowNormal, col, true, this.Tablero)
        agregarPocision(nextRowNormal, col - 1, false, this.Tablero)
        agregarPocision(nextRowNormal, col + 1, false, this.Tablero)

        function agregarPocision(roww, coll, paso, tablero) {
            if (roww < 8 && coll < 8 && roww >= 0 && coll >= 0 && tablero[roww][coll].color != eleSelect.color) {
                if (paso) {
                    if (tablero[roww][coll]?.value == "") {
                        posiciones.push({ row: roww, col: coll });
                        if (row == rowInicial && tablero[nextRowOrdinal][coll]?.value == "")
                            posiciones.push({ row: nextRowOrdinal, col: coll });
                    }
                } else if (tablero[roww][coll]?.value != "") {
                    posiciones.push({ row: roww, col: coll });
                }
            }
        }

        return posiciones;
    }

}

export default Peon;