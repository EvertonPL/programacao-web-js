function transporMatriz(A) {
    console.log("=== Matriz Original ===");
    console.log(A);

    let matrizTransposta = [];

    for (let col = 0; col < A[0].length; col++) {
        let novaLinha = [];

        for (let lin = 0; lin < A.length; lin++) {
            novaLinha.push(A[lin][col]);
        }
        
        matrizTransposta.push(novaLinha);
    }

    console.log("=== Matriz Transposta ===");
    console.log(matrizTransposta);
}

const matrizExemplo = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matrizExemplo);