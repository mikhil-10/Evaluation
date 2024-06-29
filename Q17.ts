abstract class emp {
    abstract meth();

    static meth1(): void {
        console.log("qwertyuio");

    };
    
    meth2(): void {
        console.log("ertyu");
    };
}

class main extends emp {
    meth() {
        console.log("hgh");

    }

}

const a = new main();
console.log(a.meth());

console.log(a.meth2());

console.log(emp.meth1());
