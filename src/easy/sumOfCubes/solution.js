sumOfCubes = array => array.map( x => x ** 3).reduce((a,b) => a+b, 0)
console.log(sumOfCubes([ 1, 2, 3 ]))