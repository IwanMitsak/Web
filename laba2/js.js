<!--1 Завдання-->
 //Завдання 1 
function cube(number){
	return(number*number*number)
}
alert("1 Завдання")
var number;
number=prompt("Введіть номер вашого варіанту ");
alert("Ваш варіант у 3-ому степені =  " +cube(number));   

<!--2 Завдання-->
//Завдання 2
function DN(data,month,number){
	return((data+month)/number)
}
alert("2 Завдання")
var data,month;
data=prompt("Введіть дату вашого народження");
month=prompt("Введіть місяць вашого  народження");
alert("Тестування функції : "  +DN(+data,+month,+number));  


<!--3 Завдання-->
//Завдання 3
function week (day){
	if( day == 1 ){ 
        alert("Сьогодні Понеділок(") ;}
    else if(day ==2 ) {
         alert("Сьогодні Вівторок");} 
   else if(day ==3 ) {
         alert("Сьогодні Середа)"); }
	 else if(day ==4 ) {
         alert("Сьогодні Четвер))"); 
	 }
	 else if( day==5 ) {
         alert("Сьогодні П'ятниця)))"); 
	 }
	 else if(day ==6 ) {
         alert("Сьогодні Субота!!"); 
	 }
	 else if(day ==7 ) {
         alert("Сьогодні Неділя!!!!))"); 
	 }
    else  {
	alert("Неправильні вхідні данні , будь-ласка  введіть [від 1 до 7]");
}
         
	return day}
	alert("3 Завдання")//3 Завдання
var day;
day=prompt("Введіть номер сьогоднішнього дня" +"[від 1 до 7]");
day=week(day);


<!--4 Завдання-->  
alert("4 Завдання");
var week2;
t=prompt("Введіть номер сьогоднішнього дня  знову");
    if( t == 1 )
week2= function(){		
alert("Сьогодні Понеділок");} 
    else if(t ==2 ) 
		week2= function(){
		alert("Сьогодні Вівторок"); }
   else if(t ==3 ) 
	   week2= function(){
	   alert("Сьогодні Середа"); }
	 else if(t ==4 )
      week2= function(){		 
      alert("Сьогодні Четвер");} 
	 else if(t ==5 )
     week2= function(){		 
       alert("Сьогодні П'ятниця"); }
	 else if(t ==6 )
		 week2= function(){
         alert("Сьогодні Субота");} 
	 else if(t ==7 )
		 week2= function(){
	alert("Сьогодні Неділя");}
    else
		week2= function(){
       alert("Неправильні вхідні данні , будь-ласка  введіть [від 1 до 7]");
		}
week2();



<!--5 Завдання-->  
	// Завдання 5
	function pow(x,n){var res=x; var i=1;
		  do{res*=x; i++;}
	while(i<n)
return res;}
function pow(x, n) {
  if (n != 1) { 
    return x * pow(x, n - 1);
  } else {
    return x;
  }
}
alert("5 Завдання[способом циклу]");
var x;
var n;
x=prompt("Введіть всій аргумент ");
n=prompt("Введіть степіль до якого потрібно піднести аргумент ");
if(n<=1){alert("Така степінь не підтримується введіть n > 1");}
else{alert(pow(+x,+n));}
alert("5 Завдання[cпособом рекурсії]");
var y = prompt("Введіть аргумент:", '');
var m = prompt("Введіть степень:", '');
if(m<=1){alert("Така степінь не підтримується введіть n > 1");}
else{
alert( pow(+y, +m) );
}