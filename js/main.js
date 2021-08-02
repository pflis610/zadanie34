let str1 = 'Uwielbiam JavaScript';
let str2 = 'Jestem świetnym programistą';
let stringcheck = function (string1, string2) {
    if (string1.length > string2.length) {
    return string1;
    } else {
      return string2;
      }
}
console.log(stringcheck(str1, str2));
