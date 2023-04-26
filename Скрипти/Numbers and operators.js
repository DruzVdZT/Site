let numberX;
alert(numberX)// буде undefined

let unar = 11;
unar = - unar;
alert(unar) // -11, використовуємо унарний мінус

let x = 12, y = 5;
alert(x - y) // 7, тепер використовується бінарний мінус

let i = 0;
let g = ++i;
alert(g)//1

let n = 2;
n += 5;
alert(n)
n *= 2;
alert(n)

let f = 2;
f *= 3 + 5;
alert(f) // 16 (b = 2 * 8)

let e = 2;
let k = 1 + (e *= 2);
alert(e), alert(k)

alert("Задача про порядок спрацьовування інкрементів і дискрементів")
let a = 1, b = 1, c, d;
c = ++a;alert(c); // 2
d = b++; alert(d); // 1
c = (2 + ++a); alert(c); // 5
d = (2 + b++); alert(d); // 4
alert(a); // 3
alert(b); // 3

alert('Скласти фразу')
str1 = 'Де є ';
str2 = 'життя ';
str3 = 'там ';
str4 = 'є ';
str5 = 'надія';
alert(str1 + str2 + str3 + str4 + str5);

let userName=prompt("What is your name",'Vlad');
alert("Hello, dear "+userName+"!");

alert("Задача на периметр і площу")
let height=prompt("Введіть висоту прямокутника");
let width=prompt("Введіть ширину прямокутника");
let p=2*height+2*width;
let s=height*width;
alert("Периметр = "+ p)
alert("Площа = "+ s)