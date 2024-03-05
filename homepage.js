function total(){
    var area = 500
    var type = document.getElementById("Fruit").value
    var fert = document.getElementById("fert").value
    
    if(type == 1){ //ทุเรียน
        a = 80
        var n = area/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น "
        p = 120
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท "
         if (fert == 1){ //ปุ๋ยอินทรีย์เคมี
             d = 500
             var x = (n*12)/d
             x = Math.ceil(x)
             b = 1000 //ค่ากลางรอเปลี่ยน
             var y = x*b
            document.getElementById("y").innerHTML = y + " บาท "
        }
         if (fert == 2){ //ปุ๋ยหมัก
             d = 500
             var x = (n*12)/d
             x = Math.ceil(x)
             b = 2000 //ค่ากลางรอเปลี่ยน
             var y = x*b
            document.getElementById("y").innerHTML = y + " บาท "
        }
         if (fert == 3){ //ปุ๋ยคอก
             d = 500
             var x = (n*12)/d
             x = Math.ceil(x)
             b = 3000 //ค่ากลางรอเปลี่ยน
             var y = x*b
            document.getElementById("y").innerHTML = y + " บาท "
        }
        var T = document.getElementById("T").value
        if (T=="") {
            T=0
        }
        var total = parseInt(parseInt(c)+parseInt(y)+parseInt(T))
        document.getElementById("total").innerHTML = total + " บาท "
        console.log("durian") 
    
    }
    
    if(type == 2){ //มังคุด
        a = 80
        var n = area/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น "
        p = 80
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท "
             if (fert == 1){ //ปุ๋ยอินทรีย์เคมี
                 d = 500
                 var x = (n*12)/d
                 x = Math.ceil(x)
                 b = 1000 //ค่ากลางรอเปลี่ยน
                 var y = x*b
                document.getElementById("y").innerHTML = y + " บาท "
            }
             if (fert == 2){ //ปุ๋ยหมัก
                 d = 500
                 var x = (n*12)/d
                 x = Math.ceil(x)
                 b = 2000 //ค่ากลางรอเปลี่ยน
                 var y = x*b
                document.getElementById("y").innerHTML = y + " บาท "
            }
             if (fert == 3){ //ปุ๋ยคอก
                 d = 500
                 var x = (n*12)/d
                 x = Math.ceil(x)
                 b = 3000 //ค่ากลางรอเปลี่ยน
                 var y = x*b
                document.getElementById("y").innerHTML = y + " บาท "
            }
        var T = document.getElementById("T").value
        if (T=="") {
            T=0
        }
        var total = parseInt(parseInt(c)+parseInt(T))
        document.getElementById("total").innerHTML = total + " บาท"
        console.log("mangoesteen")
    }
    
    if(type == 3){ // เงาะ
        a = 80
        var n = area/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น"
        p = 50
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท"
             if (fert == 1){ //ปุ๋ยอินทรีย์เคมี
                 d = 500
                 var x = (n*2*12)/d
                 x = Math.ceil(x)
                 b = 1000 //ค่ากลางรอเปลี่ยน
                 var y = x*b
                document.getElementById("y").innerHTML = y + " บาท "
            }
             if (fert == 2){ // ปุ๋ญหมัก
                 d = 500
                 var x = (n*2*12)/d
                 x = Math.ceil(x)
                 b = 2000 //ค่ากลางรอเปลี่ยน
                 var y = x*b
                document.getElementById("y").innerHTML = y + " บาท "
            }
             if (fert == 3){ // ปุ๋ยคอก
                 d = 500
                 var x = (n*2*12)/d
                 x = Math.ceil(x)
                 b = 3000 //ค่ากลางรอเปลี่ยน
                 var y = x*b
                document.getElementById("y").innerHTML = y + " บาท "
            }
        var T = document.getElementById("T").value
        if (T=="") {
            T=0
        }
        var total = parseInt(parseInt(c)+parseInt(T))
        document.getElementById("total").innerHTML = total + " บาท"
        console.log("rambutan")
    }
    
    if(type == 4){ //ลำไย
        a = 64
        var n = area/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น"
        p = 70
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท"
        if (fert == 1){ //ปุ๋ยอินทรีย์เคมี
            d = 500
            var x = (n*12)/d
            x = Math.ceil(x)
            b = 1000 //ค่ากลางรอเปลี่ยน
            var y = x*b
           document.getElementById("y").innerHTML = y + " บาท "
       }
        if (fert == 2){ // ปุ๋ญหมัก
            d = 500
            var x = (n*12)/d
            x = Math.ceil(x)
            b = 2000 //ค่ากลางรอเปลี่ยน
            var y = x*b
           document.getElementById("y").innerHTML = y + " บาท "
       }
        if (fert == 3){ // ปุ๋ยคอก
            d = 500
            var x = (n*12)/d
            x = Math.ceil(x)
            b = 3000 //ค่ากลางรอเปลี่ยน
            var y = x*b
           document.getElementById("y").innerHTML = y + " บาท "
        }

        var T = document.getElementById("T").value
        if (T=="") {
            T=0
        }
        var total = parseInt(parseInt(c)+parseInt(T))
        document.getElementById("total").innerHTML = total + " บาท"
        console.log("longan")
    }
    
    if(type == 5){ //ยางพารา
        a = 20
        var n = area/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น"
        p = 99
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท"

     if (fert == 1){ //ปุ๋ยอินทรีย์เคมี
             d = 500
             var x = (n*2*4*12)/d
             x = Math.ceil(x)
             b = 1000 //ค่ากลางรอเปลี่ยน
             var y = x*b
            document.getElementById("y").innerHTML = y + " บาท "
        }
         if (fert == 2){ // ปุ๋ญหมัก
             d = 500
             var x = (n*2*4*12)/d
             x = Math.ceil(x)
             b = 2000 //ค่ากลางรอเปลี่ยน
             var y = x*b
            document.getElementById("y").innerHTML = y + " บาท "
        }
         if (fert == 3){ // ปุ๋ยคอก
             d = 500
             var x = (n*2*4*12)/d
             x = Math.ceil(x)
             b = 3000 //ค่ากลางรอเปลี่ยน
             var y = x*b
            document.getElementById("y").innerHTML = y + " บาท "
        }
        var T = document.getElementById("T").value
        if (T=="") {
            T=0
        }
        var total = parseInt(parseInt(c)+parseInt(T))
        document.getElementById("total").innerHTML = total + " บาท"
        console.log("rubber")
    }
}
function all(){

}
