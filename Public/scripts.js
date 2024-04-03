function crearInputsMatrix(id, rows, cols) {
    let matrixDiv = document.getElementById(id);
    matrixDiv.innerHTML = ''; // Limpiar el div antes de crear nuevos inputs

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let input = document.createElement('input');
            input.type = 'number';
            input.setAttribute('data-row', i);
            input.setAttribute('data-col', j);
            matrixDiv.appendChild(input);
        }
        matrixDiv.appendChild(document.createElement('br')); // Salto de línea después de cada fila
    }
}

function multiplicarMatrices() {
    const rowsA = parseInt(document.getElementById('rowsA').value);
    const colsA = parseInt(document.getElementById('colsA').value);
    const rowsB = parseInt(document.getElementById('rowsB').value);
    const colsB = parseInt(document.getElementById('colsB').value);

    if (colsA !== rowsB) {
        alert('El número de columnas de la matriz A debe ser igual al número de filas de la matriz B para multiplicar.');
        return;
    }

    crearInputsMatrix('resultado', rowsA, colsB);

    const matrizA = obtenerMatriz('matrixA', rowsA, colsA);
    const matrizB = obtenerMatriz('matrixB', rowsB, colsB);

    const resultado = multiplicarMatricesInternamente(matrizA, matrizB);

    llenarResultado(resultado);
}

function obtenerMatriz(id, rows, cols) {
    let matriz = [];
    let inputs = document.getElementById(id).getElementsByTagName('input');
    let index = 0;

    for (let i = 0; i < rows; i++) {
        matriz[i] = [];
        for (let j = 0; j < cols; j++) {
            matriz[i][j] = parseInt(inputs[index].value);
            index++;
        }
    }

    return matriz;
}

function multiplicarMatricesInternamente(matrizA, matrizB) {
    let resultado = [];

    for (let i = 0; i < matrizA.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < matrizB[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrizB.length; k++) {
                sum += matrizA[i][k] * matrizB[k][j];
            }
            resultado[i][j] = sum;
        }
    }

    return resultado;
}

function llenarResultado(resultado) {
    let inputs = document.getElementById('resultado').getElementsByTagName('input');
    let index = 0;

    for (let i = 0; i < resultado.length; i++) {
        for (let j = 0; j < resultado[0].length; j++) {
            inputs[index].value = resultado[i][j];
            index++;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('rowsA').addEventListener('change', function() {
        const rows = parseInt(this.value);
        const cols = parseInt(document.getElementById('colsA').value);
        crearInputsMatrix('matrixA', rows, cols);
    });

    document.getElementById('colsA').addEventListener('change', function() {
        const rows = parseInt(document.getElementById('rowsA').value);
        const cols = parseInt(this.value);
        crearInputsMatrix('matrixA', rows, cols);
    });

    document.getElementById('rowsB').addEventListener('change', function() {
        const rows = parseInt(this.value);
        const cols = parseInt(document.getElementById('colsB').value);
        crearInputsMatrix('matrixB', rows, cols);
    });

    document.getElementById('colsB').addEventListener('change', function() {
        const rows = parseInt(document.getElementById('rowsB').value);
        const cols = parseInt(this.value);
        crearInputsMatrix('matrixB', rows, cols);
    });
});
