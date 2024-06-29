class info {
    name: String;
    static id: number;

    static add(a: number, b: number): number {
        return a + b;
    }

    constructor(name: String) {
        this.name = name;
    }
}

const ob = new info("Mikhil");
console.log(ob);

console.log(info.add(10, 20));

