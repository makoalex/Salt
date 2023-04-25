var twoFer = function (name) {
    if (name === void 0) { name = "you"; }
    return "one for ".concat(name, ", one for me");
};
console.log(twoFer('mako'));
var leapYear = function (year) {
    if (year % 4 === 0 && year % 100 != 0)
        return true;
    else
        return false;
};
console.log(leapYear(2013));
console.log(leapYear(2012));
