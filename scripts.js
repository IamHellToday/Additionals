var array = [1, 4, 'a', 23, 'as', {id: 'hello'}];
    arrayElement = array[2];
    arraytoString = array.toString();
    arrayJoin = array.join(' | ');
    x = array.push('d');
    d = array.pop();
    array.splice(1, 0, 'behind4');
    spliced = array.splice(3, 1);
    

console.log(arrayElement);
console.log(array.length);
console.log(arraytoString);
console.log(arrayJoin);
console.log(x);
console.log(array);
console.log(d);
console.log(array.length);
console.log(array);
console.log(spliced);

var array1 = [1, 2, 3, 4, 5];
    array2 = [6,  7, 8, 9, 10];
    array3 = [11, 12, 13, 14,15];
var array4 = array1.concat(array2, array3);

console.log(array4);

var indexOf3 = array1.indexOf(3);

console.log(indexOf3);
console.log(array1[indexOf3]);

    divided = array1.map(function(value) {
      return value / 2;
      
    });
console.log(divided);

    without5 = array1.filter(function(value) {
      
      return value != 5;
    });
    console.log(without5);
      

