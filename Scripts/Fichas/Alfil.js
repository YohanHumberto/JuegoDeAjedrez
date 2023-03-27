class Alfil {

    constructor(tablero) {
        this.Tablero = tablero;
    }

    GetMovimientos(row, col) {
        row = parseInt(row);
        col = parseInt(col);

        const posiciones = [];
        let obtaculo = { topLeft: false, topRigth: false, bottonLeft: false, bottonRigth: false };

        for (let index = 1; index < 8; index++) {
            agregarPocision(row + index, col + index, this.Tablero, "bottonRigth");
            agregarPocision(row - index, col - index, this.Tablero, "topLeft");
            agregarPocision(row + index, col - index, this.Tablero, "bottonLeft");
            agregarPocision(row - index, col + index, this.Tablero, "topRigth");
        }

        function agregarPocision(roww, coll, tablero, obtIndex) {
            if (roww < 8 && roww >= 0 && coll < 8 && coll >= 0 && !obtaculo[`${obtIndex}`]) {
                let ele = tablero[roww][coll];
                if (tablero[row][col].color != ele.color) posiciones.push({ row: roww, col: coll });
                if (ele.value != "") obtaculo[`${obtIndex}`] = true;
            }
        }

        return posiciones;
    }
}

export default Alfil;