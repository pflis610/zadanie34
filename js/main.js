let str1 = 'Uwielbiam JavaScript';
let str2 = 'Jestem świetnym programistą';
let stringcheck = function (str1, str2) {
if (str1.length > str2.length) {
    return str1;
} else {
    return str2;
    }
}
console.log(stringcheck(str1, str2));
