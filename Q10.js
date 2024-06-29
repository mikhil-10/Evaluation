try {
    const a = 10
    a = 10
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
finally {
    console.log("Done..");
}