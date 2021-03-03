// Your code here
function mapToNegativize(arr){
    let negative = arr.map( num => -num )
    return negative
}

function mapToNoChange(arr){
    let non = arr.map( num => num )
    return non
}

function mapToDouble(arr){
    let dub = arr.map( num => num * 2)
    return dub
}

function mapToSquare(arr){
    let sq = arr.map( num => num ** 2)
    return sq
}

function reduceToTotal(arr, start = 0){
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let tot = arr.reduce(reducer, start)
    return tot
}

function reduceToAllTrue(arr){
    const testing = (currentValue) => currentValue? true:false ;
    return arr.every(testing)
}

function reduceToAnyTrue(arr){
    const testing = (currentValue) => currentValue? true:false
    return arr.some(testing)
}