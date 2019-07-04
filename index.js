// 几个作用域  每个作用域可以访问的变量


var color = "blue";

function changeColor() {
    var anotherColor = "red";
    function swapColors() {
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
    }
    swapColors();
}
changeColor();