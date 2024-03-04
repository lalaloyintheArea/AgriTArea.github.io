function Fruit(){
    var area = 500
    var type = document.getElementById("Fruit").value
    if(type == 1){
        a = 80
        var n = area/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น"
        p = 120
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท"
        console.log("durian")
    }
    if(type == 2){
        a = 80
        var n = area/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น"
        p = 80
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท"
        console.log("mangoesteen")
    }
    if(type == 3){
        a = 80
        var n = area/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น"
        p = 50
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท"
        console.log("rambutan")
    }
    if(type == 4){
        a = 64
        var n = area/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น"
        p = 70
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท"
        console.log("longan")
    }
    if(type == 5){
        a = 20
        var n = area/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น"
        p = 99
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท"
        console.log("rubber")
    }
}
