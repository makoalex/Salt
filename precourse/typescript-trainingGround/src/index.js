"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = exports.AddToStart = exports.greetPeople = exports.optionallyAdd2 = exports.printThis = exports.getPersonNameString = exports.Employee = exports.PersonClass = exports.getStreetNo = exports.sumEvans = exports.countOdd = exports.isOld = exports.greet = void 0;
function greet(name, birthYear) {
    var age = new Date().getFullYear() - birthYear;
    return "Hello ".concat(name, ", you are ").concat(age, " years old.");
}
exports.greet = greet;
var isOld = function (age) {
    if (age >= 35) {
        return true;
    }
};
exports.isOld = isOld;
var countOdd = function (firstFive) {
    // getting odd numbers total
    return firstFive.filter(function (i) { return i % 2 !== 0; }).length;
};
exports.countOdd = countOdd;
var sumEvans = function (arr) {
    var even = arr.filter(function (i) { return i % 2 === 0; });
    return even.reduce(function (sum, current) { return sum + current; });
};
exports.sumEvans = sumEvans;
function getStreetNo(streetN) {
    return streetN.address.streetNo;
}
exports.getStreetNo = getStreetNo;
// class
var PersonClass = /** @class */ (function () {
    function PersonClass(name, birthyear) {
        this.name = '';
        this.birthYear = 0;
        this.name = name;
        this.birthYear = birthyear;
    }
    // accessing the property that is private
    PersonClass.prototype.getname = function () {
        return this.name;
    };
    return PersonClass;
}());
exports.PersonClass = PersonClass;
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.employeeIdNum = -1;
        return _this;
    }
    return Employee;
}(PersonClass));
exports.Employee = Employee;
var p = new PersonClass('mako', 1984);
var e = new Employee('ola', 1986);
var getPersonNameString = function (pers) { return "".concat(pers.name, ", ").concat(pers.birthyear.toString()); };
exports.getPersonNameString = getPersonNameString;
// ANY
// function printThis(p:Person) {
//   return p.name;
// }
// with UNION TYPE
// function printThis(pe: Person | null | undefined) {
//   //   pe ? pe.name : 'no person supplied';
//   if (!pe) {
//     return 'no person supplied';
//   }
//   return pe.name;
// }
var printThis = function (pe) { return (!pe ? 'no person supplied' : pe.name); };
exports.printThis = printThis;
// FUNCTIONS
//  const optionallyAdd= (arr:Array<number>): number => arr[0] +arr[1]
var optionallyAdd = function (num1, num2, num3, num4, num5) { return num1 + num2; };
// const optionallyAdd2 = (num1: number, num2: number, num3?: number, num4?: number, num5?: number): number => {
//   let sum = num1 + num2;
//   if (num3) {
//     sum += num3;
//   }
//   if (num4) {
//     sum += num4;
//   }
//   sum += num5 : 0;
//   return sum;
// };
var optionallyAdd2 = function (num1, num2, num3, num4, num5) {
    var sum = num1 + num2;
    if (num3 !== undefined) {
        sum += num3;
    }
    if (num4) {
        sum += num4;
    }
    sum += num5 ? num5 : 0;
    return sum;
};
exports.optionallyAdd2 = optionallyAdd2;
// rest parameters
function greetPeople(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(greeting, " ").concat(names.join('and')).trim();
}
exports.greetPeople = greetPeople;
//generic
function AddToStart(listOfPeople, itemToAdd) {
    return __spreadArray([itemToAdd], listOfPeople, true);
}
exports.AddToStart = AddToStart;
var Wrapper = /** @class */ (function () {
    function Wrapper(list) {
        this.list = list;
    }
    Wrapper.prototype.getFirst = function () { return this.list[0]; };
    Wrapper.prototype.getLast = function () { return this.list[this.list.length - 1]; };
    return Wrapper;
}());
exports.Wrapper = Wrapper;
