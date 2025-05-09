const matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
 ];

 function flatArrFromMatrix(matrix) {
    let flatArr = matrix.reduce((acc, elem) => {
        return acc = acc.concat(elem)
    }, [])
    console.log(flatArr);
 }

 flatArrFromMatrix(matrix);