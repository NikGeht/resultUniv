function createMatrix(row, column) {
    if (!isNaN(Number(row)) && !isNaN(Number(column))) {
        let matrix = [];
        for (let i = 0; i < row; i++) {
            let columnArray = [];
            for (let j = 1; j <= column; j++) {
                columnArray.push(j);
            }
            matrix.push(columnArray);
        }
        return matrix;
    } else {
        return `Error: некорректные параметры`;
    }
}
const row = 3;
const column = 5;
let resultMatrix = createMatrix(row, column);
console.log(`Матрица с размерами ${row}x${column}`);
console.log(resultMatrix)
