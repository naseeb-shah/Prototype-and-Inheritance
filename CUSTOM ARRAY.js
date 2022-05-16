Array.prototype.print = function () {
    str = ''
    this.forEach(e => {
        str += e + " "
    })
    console.log(str)
}
Array.prototype.push = function (x) {
    this[this.length] = x
}
Array.prototype.pop = function () {
    this.length = this.length - 1
}
Array.prototype.top = function () {
    var x = this[this.length - 1]
    return x
}
Array.prototype.printReverse = function () {
    str = ''
    for (var i = this.length - 1; i >= 0; i--) {
        
        str += this[i] + " "

    }
    console.log(str)
}
Array.prototype.size = function () {
return this.length
}

arr = [1, 2, 3, 4]
arr.push(6)

arr.pop()
console.log(arr.size())
arr.printReverse()