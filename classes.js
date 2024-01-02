class Triangle {
    getArea() {
        return (this.a * this.b) / 2 ;
    }
    getHypotenuse() {
        return Math.sqrt(this.a ** 2  + this.b ** 2 );
    }
}


 class Triangle2 {

    getArea() {
        return (this.a + this.b )
    }
    getArea2 () {
        return (this.a * this.b);
    }
 }
 
 let math = new Triangle2()
 math.a = 2
 math.b = 2
console.log(math.getArea())
console.log(math.getArea2())

// let fristTri = new Triangle()
// fristTri.a = 3 
// fristTri.b = 4
// console.log( fristTri.getArea())
// console.log( fristTri.getHypotenuse())
