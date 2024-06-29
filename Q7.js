class emp {
    name;
    id;
    salary;

    displayinfo(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
}

const e = new emp();

e.displayinfo("mikhil", 30, 300000);

console.log(e);