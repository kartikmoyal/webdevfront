x = prompt("Enter the value of amount:");
x = parseFloat(x);

if(x<5000){
    document.write("total bill is =" +x);

}
else if(x>=5000){
    var y = prompt("Enter the value of discount:"); 
y = parseFloat(x) / parseFloat(a);


var z = parseFloat(x) / parseFloat(y);
document.write("total discount is  =" +z);

var total_amount  = parseFloat(x) - parseFloat(z);

document.write("<br>Total amount after discount is = " + total_amount);


}


