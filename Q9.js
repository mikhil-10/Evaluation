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

async function fetch() {
    const data = await d;
    if (data) {
        console.log("Done");
    } else {
        console.log("error");
    }
}
fetch()