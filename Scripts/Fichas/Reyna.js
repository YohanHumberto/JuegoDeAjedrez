class Reyna {

    constructor(tablero, Alfil, Torre) {
        this.Tablero = tablero;
        this.Alfil = Alfil;
        this.Torre = Torre;
    }

    GetMovimientos(row, col) {
        row = parseInt(row);
        col = parseInt(col);

        let posiciones = [
            ...this.Alfil.GetMovimientos(row, col),
            ...this.Torre.GetMovimientos(row, col)
        ];

        return posiciones;
    }

}

export default Reyna;
