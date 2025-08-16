let x1 = 0, x2 = 0, x3 = 0;

x1 = 10, x2 = 20, x3 = 30;

console.log(`The result of section number 1: ${x1 * x2 * x3}`);

let xStr1 = "First",xStr2 = "Seond", xStr3 = "";

console.log(`The result of section number 2(Before): ${xStr1} ${xStr2} ${xStr3}`);
xStr3 = xStr2;
xStr2 = xStr1;
xStr1 = xStr3;
console.log(`The result of section number 2(After): ${xStr1} ${xStr2} ${xStr3}`);

xStr1 = 'David Nahmias';
console.log(`The result of section number 3(Before): ${xStr1}`);
console.log(`The result of section number 3(After): ${xStr1.replace(" ","*")}`);

x1 = 3, x2 = 4;
console.log(`The result of section number 4: ${x1} ${x2}`);
console.log(`The result of section number 4: ${x1 ** x2}`);

xStr1 = "A";
xStr2 = "1234567890";
xStr3 = '';
console.log(`The result of section number 5(Before): ${xStr1} ${xStr2} ${xStr3}`);
xStr2 = xStr1+xStr2.slice(0,Math.round((xStr2.length-1)/2)) +xStr1+xStr2.slice(Math.round((xStr2.length-1)/2),xStr2.length)+xStr1;
console.log(`The result of section number 5(After): ${xStr2}`);

let a61=11,a62=12,a63=13,a64=14,a65=15;
console.log(`The result of section number 6(Before): ${a61} ${a62} ${a63} ${a64} ${a65}`);

console.log(`The result of section number 6 Multiplication (after): ${a61*a62*a63*a64*a65}`);
console.log(`The result of section number 6 Unit Digit(after): ${a61%10} ${a62%10} ${a63%10} ${a64%10} ${a65%10}`);

xStr1 = "12345";
xStr2 = "67890";
xStr3 = "";
console.log(`The result of section number 7(Before): ${xStr1} ${xStr2} ${xStr3}`);
xStr3 = xStr1+' '+xStr2;
console.log(`The result of section number 7(After): ${xStr3} the length is: ${xStr3.length} `);

xStr1 = '123456 789';
xStr1 = 'David Nahmias';
console.log(`The result of section number 8(Before): ${xStr1}`);
console.log(`The result of section number 8(After): first Name: ${(xStr1.slice(0,xStr1.indexOf(" ")))} Last Name :${(xStr1.slice(xStr1.indexOf(" ")+1,xStr1.length))}`);
console.log(`The result of section number 8(After): first Name len:${(xStr1.slice(0,xStr1.indexOf(" "))).length} Last Name len:${(xStr1.slice(xStr1.indexOf(" ")+1,xStr1.length)).length}`);

let f1=4.8,f2=-4.9;
console.log(`The result of section number 9(Before): ${f1} ${f2}`);
console.log(`The result of section number 9(After): trunc:${Math.trunc(f1)}) abs:${Math.abs(f2)})`);

let a101=406,a102=407;
console.log(`The result of section number 10(Before): ${a101} ${a102}`);
a101 = a101+' '+a102;
a102 = a101.slice(0,a101.indexOf(" "));
a101 = a101.slice(a101.indexOf(" ")+1,a101.length);
console.log(`The result of section number 10(After): ${a101} ${a102}`);