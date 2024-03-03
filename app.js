let length,value,value1,value2,width;
function getValue(){
      let Fruit = document.getElementById("Fruit").value;
      if( Fruit != "") {
            document.getElementById("result").innerHTML = Fruit;
      }
}
function toLength()
{
       length = prompt("Length:")
       value1 = (length/5)-1
      document.getElementById("toLength").innerHTML = value1;
}
function toWidth()
{
       width = prompt("Width:")
       value2 = (width/3)-1
      document.getElementById("toWidth").innerHTML = value2
}
function toArea()
{
       value = value1 * value2
      document.getElementById("toArea").innerHTML = value;
}
toLength()
toWidth()
toArea()
