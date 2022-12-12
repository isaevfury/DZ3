// 1
for (var i = 2; i <= 20; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
}

// 2
var g = 0;
do{
    var gameOfTrons = prompt('введите число:')
    if (gameOfTrons > 0){
        g -= gameOfTrons
    } else {
        alert(g)
        break
    }
}while (true)