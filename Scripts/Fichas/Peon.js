class Peon {

    Tablero;

    constructor(tablero) {
        this.Tablero = tablero;
    }
    
    GetMovimientos(row, col, tipo) {
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

}

export default Peon;
