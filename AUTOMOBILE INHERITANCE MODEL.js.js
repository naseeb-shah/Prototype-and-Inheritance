bike={
    color:"black",
    year:new Date().getFullYear()
    makers:'Hero'
}
var k = Object.create(bike)
k.model="Seplnder"
console.log(k.color)