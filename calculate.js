function total(){
    var type = document.getElementById("Fruit").value //เลือกพืช
    var fert = document.getElementById("fert").value //เลือกปุ๋ย
    var q = document.getElementById("q").value //ใส่พื้นที่
    var g = document.getElementById("g").value //ใส่ค่าปุ๋ยที่ต้องการ
    if(type == 0){ // กรุณาเลือกชนิดพืช
            n = 0
            c =0 
            a =0
            document.getElementById("n").innerHTML = n + " ต้น "
            document.getElementById("c").innerHTML = c + " บาท "
            document.getElementById("a").innerHTML = "0 x 0 ตารางเมตร"
    }
    if(type == 1){ // ทุเรียน
        a = 8*10
        var n = q/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น " //จำนวนต้น
        p = 120
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท " //ราคาต้นกล้า
        document.getElementById("a").innerHTML = "8 x 10 ตารางเมตร" //ระยะห่างการปลูก
         if (fert == 0){ // ไม่เลือกปุ๋ย
            z = 0
            y = 0
            document.getElementById("z").innerHTML = z + " กระสอบ " // จำนวนปุ๋ยกี่กระสอบ
            document.getElementById("y").innerHTML = y + " บาท " // ราคาปุ๋ยทั้งหมด
         }
         if (fert == 1){ // ปุ๋ยอินทรีย์เคมี
             d = 500
             var z = (n*12)/d
             z = Math.ceil(z)
            document.getElementById("z").innerHTML = z + " กระสอบ "
             b = 1060 //ค่ากลางเปลี่ยนแล้ว
             var y = z*b
            document.getElementById("y").innerHTML = y + " บาท "
        }
         if (fert == 2){ // ปุ๋ยหมัก
             d = 500
             var z = (n*12)/d
             z = Math.ceil(z)
            document.getElementById("z").innerHTML = z + " กระสอบ "
             b = 300 // ราคาค่ากลางรอเปลี่ยน
             var y = z*b
            document.getElementById("y").innerHTML = y + " บาท "
        }
         if (fert == 3){ // ปุ๋ยคอก
             d = 500
             var z = (n*12)/d
             z = Math.ceil(z)
            document.getElementById("z").innerHTML = z + " กระสอบ "
             b = 450 //ค่ากลางเปลี่ยนแล้ว
             var y = z*b
            document.getElementById("y").innerHTML = y + " บาท "
        }
         if (fert == 4){  //อื่นๆ
             d = 500
             var z = (n*12)/d
             z = Math.ceil(z)
            document.getElementById("z").innerHTML = z + " กระสอบ "//ใส่ค่าเพิ่มเติม
             var y = z*g //ประกาศ y มาแล้วให้เท่ากับ จำนวนกระสอบคุณกับค่าที่ใส่เข้ามา
            document.getElementById("y").innerHTML = y + " บาท "
         }
        var T = document.getElementById("T").value //ใส่ค่าเพิ่มเติมเอง
        T = Math.abs(T)
        if (T=="") {
            T=0
        }
        var total = parseInt(parseInt(c)+parseInt(y)+parseInt(T)) // รวมทุเรียน
        document.getElementById("total").innerHTML = total + " บาท "
        console.log("durian")
    
    }
    
    if(type == 2){ // มังคุด
        a = 8*10
        var n = q/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น "
        p = 80
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท "
        document.getElementById("a").innerHTML = "8 x 10 ตารางเมตร"
             if (fert == 0){ // ไม่เลือกปุ๋ย
                z = 0
                y = 0
                document.getElementById("z").innerHTML = z + " กระสอบ "
                document.getElementById("y").innerHTML = y + " บาท "
             }
             if (fert == 1){ // ปุ๋ยอินทรีย์เคมี
                 d = 500
                 var z = (n*12)/d
                 z = Math.ceil(z)
                document.getElementById("z").innerHTML = z + " กระสอบ "
                 b = 1060 //ค่ากลางเปลี่ยนแล้ว
                 var y = z*b
                document.getElementById("y").innerHTML = y + " บาท "
            }
             if (fert == 2){ // ปุ๋ยหมัก
                 d = 500
                 var z = (n*12)/d
                 z = Math.ceil(z)
                document.getElementById("z").innerHTML = z + " กระสอบ "
                 b = 300 //ค่ากลางเปลี่ยนแล้ว
                 var y = z*b
                document.getElementById("y").innerHTML = y + " บาท "
            }
             if (fert == 3){ // ปุ๋ยคอก
                 d = 500
                 var z = (n*12)/d
                 z = Math.ceil(z)
                document.getElementById("z").innerHTML = z + " กระสอบ "
                 b = 450 //ค่ากลางเปลี่ยนแล้ว
                 var y = z*b
                document.getElementById("y").innerHTML = y + " บาท "
            }
             if (fert == 4){  //อื่นๆ
                d = 500
                var z = (n*12)/d
                z = Math.ceil(z)
               document.getElementById("z").innerHTML = z + " กระสอบ "//ใส่ค่าเพิ่มเติม
                var y = z*g //ประกาศ y มาแล้วให้เท่ากับ จำนวนกระสอบคุณกับค่าที่ใส่เข้ามา
               document.getElementById("y").innerHTML = y + " บาท "
            }
           
        var T = document.getElementById("T").value //ใส่ค่าเพิ่มเติมเอง
        T = Math.abs(T)
        if (T=="") {
            T=0
        }
        var total = parseInt(parseInt(c)+parseInt(y)+parseInt(T)) // รวมมังคุด
        document.getElementById("total").innerHTML = total + " บาท"
        console.log("mangoesteen")
    }
    
    if(type == 3){ // เงาะ
        a = 8*10
        var n = q/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น"
        p = 50
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท"
        document.getElementById("a").innerHTML = "8 x 10 ตารางเมตร"
             if (fert == 0){ // ไม่เลือกปุ๋ย
                z = 0
                y = 0
                document.getElementById("z").innerHTML = z + " กระสอบ "
                document.getElementById("y").innerHTML = y + " บาท "
             }
             if (fert == 1){ // ปุ๋ยอินทรีย์เคมี
                 d = 500
                 var z = (n*2*12)/d
                 z = Math.ceil(z)
                document.getElementById("z").innerHTML = z + " กระสอบ "
                 b = 1060 //ค่ากลางเปลี่ยนแล้ว
                 var y = z*b
                document.getElementById("y").innerHTML = y + " บาท "
            }
             if (fert == 2){ // ปุ๋ยหมัก
                 d = 500
                 var z = (n*2*12)/d
                 z = Math.ceil(z)
                document.getElementById("z").innerHTML = z + " กระสอบ "
                 b = 300 //ค่ากลางเปลี่ยนแล้ว
                 var y = z*b
                document.getElementById("y").innerHTML = y + " บาท "
            }
             if (fert == 3){ // ปุ๋ยคอก
                 d = 500
                 var z = (n*2*12)/d
                 z = Math.ceil(z)
                document.getElementById("z").innerHTML = z + " กระสอบ "
                 b = 450 //ค่ากลางเปลี่ยนแล้ว
                 var y = z*b
                document.getElementById("y").innerHTML = y + " บาท "
            }
             if (fert == 4){  //อื่นๆ
                d = 500
                var z = (n*2*12)/d
                z = Math.ceil(z)
               document.getElementById("z").innerHTML = z + " กระสอบ "//ใส่ค่าเพิ่มเติม
                var y = z*g //ประกาศ y มาแล้วให้เท่ากับ จำนวนกระสอบคุณกับค่าที่ใส่เข้ามา
               document.getElementById("y").innerHTML = y + " บาท "
            }
           
        var T = document.getElementById("T").value //ใส่ค่าเพิ่มเติมเอง
        T = Math.abs(T)
        if (T=="") {
            T=0
        }
        var total = parseInt(parseInt(c)+parseInt(y)+parseInt(T)) // รวมเงาะ
        document.getElementById("total").innerHTML = total + " บาท"
        console.log("rambutan")
    }
    
    if(type == 4){ // ลำไย
        a = 8*8
        var n = q/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น"
        p = 70
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท"
        document.getElementById("a").innerHTML = "8 x 8 ตารางเมตร"
         if (fert == 0){ // ไม่เลือกปุ๋ย
            z = 0
            y = 0
            document.getElementById("z").innerHTML = z + " กระสอบ "
            document.getElementById("y").innerHTML = y + " บาท "
         }
         if (fert == 1){ // ปุ๋ยอินทรีย์เคมี
            d = 500
            var z = (n*12)/d
            z = Math.ceil(z)
        document.getElementById("z").innerHTML = z + " กระสอบ "
            b = 1060 //ค่ากลางเปลี่ยนแล้ว
            var y = z*b
           document.getElementById("y").innerHTML = y + " บาท "
       }
        if (fert == 2){ // ปุ๋ยหมัก
            d = 500
            var z = (n*12)/d
            z = Math.ceil(z)
        document.getElementById("z").innerHTML = z + " กระสอบ "
            b = 300 //ค่ากลางเปลี่ยนแล้ว
            var y = z*b
           document.getElementById("y").innerHTML = y + " บาท "
       }
        if (fert == 3){ // ปุ๋ยคอก
            d = 500
            var z = (n*12)/d
            z = Math.ceil(z)
        document.getElementById("z").innerHTML = z + " กระสอบ "
            b = 450 //ค่ากลางเปลี่ยนแล้ว
            var y = z*b
           document.getElementById("y").innerHTML = y + " บาท "
        }
         if (fert == 4){  //อื่นๆ
            d = 500
            var z = (n*12)/d
            z = Math.ceil(z)
           document.getElementById("z").innerHTML = z + " กระสอบ "//ใส่ค่าเพิ่มเติม
            var y = z*g //ประกาศ y มาแล้วให้เท่ากับ จำนวนกระสอบคุณกับค่าที่ใส่เข้ามา
           document.getElementById("y").innerHTML = y + " บาท "
        }
       

        var T = document.getElementById("T").value //ใส่ค่าเพิ่มเติมเอง
        T = Math.abs(T)
        if (T=="") {
            T=0
        }
        var total = parseInt(parseInt(c)+parseInt(y)+parseInt(T)) // รวมลำไย
        document.getElementById("total").innerHTML = total + " บาท"
        console.log("longan")
    }
    
    if(type == 5){ // ยางพารา
        a = 8*2.5
        var n = q/a
        n = Math.floor(n)
        document.getElementById("n").innerHTML = n + " ต้น"
        p = 99
        var c = n*p
        document.getElementById("c").innerHTML = c + " บาท"
        document.getElementById("a").innerHTML = "8 x 2.5 ตารางเมตร"
         if (fert == 0){ // ไม่เลือกปุ๋ย
            z = 0
            y = 0
            document.getElementById("z").innerHTML = z + " กระสอบ "
            document.getElementById("y").innerHTML = y + " บาท "
         }

         if (fert == 1){ // ปุ๋ยอินทรีย์เคมี
             d = 500
             var z = (n*2*4*12)/d
             z = Math.ceil(z)
            document.getElementById("z").innerHTML = z + " กระสอบ "
             b = 1060 //ค่ากลางเปลี่ยนแล้ว
             var y = z*b
            document.getElementById("y").innerHTML = y + " บาท "
        }
         if (fert == 2){ // ปุ๋ยหมัก
             d = 500
             var z = (n*2*4*12)/d
             z = Math.ceil(z)
            document.getElementById("z").innerHTML = z + " กระสอบ "
             b = 300 //ค่ากลางเปลี่ยนแล้ว
             var y = z*b
            document.getElementById("y").innerHTML = y + " บาท "
        }
         if (fert == 3){ // ปุ๋ยคอก
             d = 500
             var z = (n*2*4*12)/d
             z = Math.ceil(z)
            document.getElementById("z").innerHTML = z + " กระสอบ "
             b = 450 //ค่ากลางเปลี่ยนแล้ว
             var y = z*b
            document.getElementById("y").innerHTML = y + " บาท "
        }
         if (fert == 4){  //อื่นๆ
            d = 500
            var z = (n*2*4*12)/d
            z = Math.ceil(z)
           document.getElementById("z").innerHTML = z + " กระสอบ "//ใส่ค่าเพิ่มเติม
            var y = z*g //ประกาศ y มาแล้วให้เท่ากับ จำนวนกระสอบคุณกับค่าที่ใส่เข้ามา
           document.getElementById("y").innerHTML = y + " บาท "
        }
       
        var T = document.getElementById("T").value //ใส่ค่าเพิ่มเติมเอง
        T = Math.abs(T)
        if (T=="") {
            T=0
        }
        var total = parseInt(parseInt(c)+parseInt(y)+parseInt(T)) // รวมยางพารา
        document.getElementById("total").innerHTML = total + " บาท"
        console.log("rubber")
    }
}
function all(){}
