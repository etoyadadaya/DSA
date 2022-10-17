function updateMatrix(mat: number[][]): number[][] {
    const rLen = mat.length;
    const cLen = mat[0].length;

    const distances = [];
    const direcions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const queue = [];

    for(let row = 0; row < rLen; row++) {
        distances[row] = [];

        for(let col = 0; col < cLen; col++) {
            if(mat[row][col] === 0) {
                queue.push([row, col]);
                distances[row][col] = 0;
            } else {
                distances[row][col] = Infinity;
            }
        }
    }

    while(queue.length > 0) {
        const node = queue.shift();
        const row = node[0];
        const col = node[1];
        const val = distances[row][col];

        for(let i = 0; i < direcions.length; i++) {
            const direcion = direcions[i];
            const r = row + direcion[0];
            const c = col + direcion[1];

            if(r < 0 || r >= rLen || c < 0 || c >= cLen || mat[r][c] === 0) continue;

            const isVisited = distances[r][c] !== Infinity;
            distances[r][c] = Math.min(distances[r][c], 1 + val);

            if(!isVisited) {
                queue.push([r, c]);
            }
        }
    }

    return distances;
}