 // 1

let nums = [1, 2, 3, 4, 5];
console.log(nums.length)

for (let i = 0; i < 5; i++){
    console.log(nums[i])
}
/*
// 2

let arr =  [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num > -10 && num < -3) {
        console.log(num)
    }
}

// 3

let arrNew = [],
result = 0;

for (let i = 23; i <= 57; i++) {
    arrNew.push(i)
}

console.log(arrNew)

let j = 23;
while (j <= 57) {
    arrNew.push(j++);
    result += j;
}

console.log(arrNew) 
console.log('Сумма = ' + result)

// 4

let strArr =  ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < strArr.length; i++) {
strElem = String(strArr[i]);
    if (strElem[0] == 1 || strElem[0] == 2 || strElem[0] == 5) {
        console.log(strArr[i])
    }
}

// 5

let dayArr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

for (let i = 0; i < dayArr.length; i++) {
    if (dayArr[i] == 'сб' || dayArr[i] == 'вс') {
        document.write('<b>' + dayArr[i] + '</b>' + ' ');
    } else {
        document.write(dayArr[i] + ' ');
    }
}

//6

let monArr = ['январь', 'февраль', 'март', 'апрель'];

monArr.push('апрель')
console.log(monArr.length-1)


console.log(monArr[4])

//7

let arrUser = [];

for (let i=0; i < 10; i++) {
    arrUser[i] = prompt('Введите любое значение');
    if ( arrUser[i] == '' ) { 
        break;  
       }
}

console.log(arrUser)
console.log(arrUser.sort()) 

//8

let arr = [12, false, 'Текст', 4, 2, -5, 0],
arrRev = arr.reverse(),
i=0;

while(i < arrRev.length-1) {
    i++;
    console.log(arrRev[i])
}


//9

let arr9 = [5, 9, 21, , , 9, 78, , , , 6],
count = 0;

for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] == null) { 
     count++;
    }
}

console.log('количество пустых ячеек = ' + count)

//10

let arr10 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2],
sum = 0;

console.log(arr10.indexOf(0));
console.log(arr10.lastIndexOf(0))


arrCopy = arr10.slice(3, 7);

for (let i = 0; i < arrCopy.length; i++) {
        sum += arrCopy[i];
}

console.log(sum) 

//11

let i = 0,
max = prompt('введите желаемое количество строк'),
space = "",
mark = "";

while (i < max) {
    space = "";
    mark = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) mark += "^";
    console.log(space + mark);
    i++;
}*/