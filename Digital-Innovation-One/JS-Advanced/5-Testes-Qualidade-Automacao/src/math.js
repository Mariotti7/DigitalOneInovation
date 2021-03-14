class Math {
    sum(a, b) {
        return a + b
    }
    printSum(req, res, valueA, valueB){
        res.load('index', valueA + valueB)
    }
}
module.exports = Math