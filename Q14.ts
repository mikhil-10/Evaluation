class emp {

    name:String;
    id: number;
    sal: number;
    add: String;

    constructor(name: String,id: number,
        sal: number,
        add: String) {
        this.name = name;
        this.id = id;
        this.sal = sal;
        this.add = add
    }
    
    info(): void {
        console.log(this.name + " " + this.id + " " + this.sal + " " + this.add);

    }
}

const a = new emp("mikhil", 1, 20000, "mumbai");
a.info();
console.log(a);
