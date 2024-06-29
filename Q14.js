var emp = /** @class */ (function () {
    function emp(name, id, sal, add) {
        this.name = name;
        this.id = id;
        this.sal = sal;
        this.add = add;
    }
    emp.prototype.info = function () {
        console.log(this.name + " " + this.id + " " + this.sal + " " + this.add);
    };
    return emp;
}());
var a = new emp("mikhil", 1, 20000, "mumbai");
a.info();
console.log(a);
