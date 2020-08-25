class Shape {
    move() {
        console.log('shape move');
    }
}
class Circle extends Shape {
    move() {
        super.move();
        console.log('circle move');
    }
}

const circle = new Circle();
