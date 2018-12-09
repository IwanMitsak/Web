// WEB Lab 1

// vars
var name = "Iwan Mitsak";
var a,b,c,d,result;

//Завдання #1
alert("Завдання #1");
alert(name);

// Завдання #2
alert("Завдання #2");

a = 7;
b = 7;
d = 7;

c = a-b;
result = c+d;

alert(result);

//Завдання #3
alert("Завдання #3");

var variant = prompt("Write down your variant");
var integer = parseInt(variant, 10);
variant = integer;

if (variant >=7)
  alert("It's right");
else
  alert("It's not right");

if (variant%2==0) {
  variant+=7;
  alert(variant);
  variant-=7;
}
else {
  variant-=3;
  alert(variant);
  variant+=3;
}

//Завдання #4
alert("Завдання #4");

for (var i = 1; i<variant+10; i++)
  alert(i*i);

//Завдання #5
alert("Завдання #5");

var ToPrint = true;

for (var i = 2; i<variant+10; i++) {
  for (var z = 2; z < i; z++)
    if (i%z == 0)
      ToPrint = false;
  if (ToPrint == true)
    alert(i);
  ToPrint = true;
}