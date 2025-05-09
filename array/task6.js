const numbers = [10, 4, 100, -5, 54, 2];

function sumOfCubes(arr) {
    return {
        cubesFor : () => {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i] ** 3;
            }
            console.log(`SUM from FOR: ${sum}`);
        },
        cubesForOf: () => {
            let sum = 0;
            for (let num of arr){
                sum += num ** 3;
            }
            console.log(`SUM from FOR OF: ${sum}`)
        },
        cubesForEach: () =>{
            let sum = 0;
            arr.forEach((num) => {
                sum += num ** 3;
            })
            console.log(`SUM from FOR EACH: ${sum}`)
        },

        cubesReduce: () =>{
            let sum = 0;
            sum = arr.reduce((acc, num) =>
                {
                    return acc + num ** 3;
                }, 0)

            console.log(`SUM from Reduce: ${sum}`)
        }
    }
}

let sumChecker = sumOfCubes(numbers)
sumChecker.cubesFor()
sumChecker.cubesForOf()
sumChecker.cubesForEach()
sumChecker.cubesReduce()