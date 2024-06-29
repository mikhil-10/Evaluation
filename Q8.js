function test(done) {
    return new Promise((resolve, reject) => {
        if (done) {
            resolve("OK... ");
        } else {
            reject("Failed... ")
        }
    });
}

const d = test(true);

d.then((result) => {
    console.log(result);
}).then((result) => {
    console.log("sure ");
}).catch((err) => {
    console.log(err);
});