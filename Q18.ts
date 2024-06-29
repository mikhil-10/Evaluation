interface m {
    meth(): void;
    meth1(): void;
}

class m1 implements m {
    meth(): void {
        console.log("ewfsef");

    }
    meth1(): void {
        console.log("wretk");

    }

}

const b = new m1();
console.log(b.meth());
console.log(b.meth1());

